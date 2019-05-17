<?php

namespace App\Http\Controllers\Api;

use App\Game;
use App\Group;
use Carbon\Carbon;
use Illuminate\Http\Request;

class GamesController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin', [
            'only' => ['update', 'destroy'],
        ]);
    }

    /**
     * Get the games list
     *
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        if ($request->has('unit')) {
            $unit_limit = Carbon::create(2019, 05, 19)->addHours(12 * ($request->get('unit') - 1));
            $games = Game::whereBetween('begin_at', [$unit_limit->toDateTimeString(), $unit_limit->addHours(12)->toDateTimeString()])->get()->sortBy('begin_at');
        } else {
            $games = Game::all()->sortBy('begin_at');
        }

        $data = [];
        foreach ($games as $game) {
            $tmp = [
                'id' => $game->id,
                'name' => $game->name,
                'begin_at' => $game->begin_at->toDateTimeString(),
                'participants' => $game->participants_count,
                'groups' => $game->groups_count,
            ];

            $data[] = $tmp;
        }

        return $this->response->array($data);
    }

    /**
     * @param Game $game
     * @param Request $request
     * @return mixed
     */
    public function show(Game $game, Request $request)
    {
        $groups = $game->groups;
        if ($request->has('group')) {
            $group = $groups->where('no', $request->get('group'))->first()->content;
        } else {
            $group = [];
            foreach ($groups as $group_item) {
                $group = array_merge($group, $group_item->content);
            }
        }

        $group = collect($group);

        $data = [];
        $group = $game->reverse_sort ? $group->sortByDesc('performance') : $group->sortBy('performance');
        foreach ($group as $participant) {
            $data[] = [
                'group' => $participant['group'], //小组
                'no' => $participant['no'], //选手号码
                'group_rank' => $participant['group_rank'], //小组排名
                'name' => $participant['name'], //姓名
                'team' => $participant['team'], //单位
                'performance' => $participant['performance'], //成绩
                'remarks' => $participant['remarks'], //备注
            ];
        }

        return $this->response->array($data);
    }

    /**
     * @param Game $game
     * @param Request $request
     * @return \Dingo\Api\Http\Response
     */
    public function update(Game $game, Request $request)
    {
        $data = [];
        foreach ($request->post('entities') as $entity) {
            if (!isset($data[$entity['group']])) {
                unset($entity['group']);
                $data[$entity['group']] = [$entity];
            }
            unset($entity['group']);
            $data[$entity['group']] = array_push($data[$entity['group']], $entity);
        }

        $groups = collect();
        foreach ($data as $key => $datum) {
            $groups->push(new Group([
                'no' => $key,
                'content' => $datum,
            ]));
        }

        $game->groups()->saveMany($groups);

        return $this->response->created();
    }

    public function destroy(Game $game)
    {
        $game->groups()->delete();
    }
}
