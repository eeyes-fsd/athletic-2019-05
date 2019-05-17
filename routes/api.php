<?php

use Illuminate\Http\Request;

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', [
    'namespace' => 'App\Http\Controllers\Api',
    'middleware' => 'bindings',
], function ($api){
    $api->get('games', 'GamesController@index')
        ->name('api.games.index');
    $api->get('games/{game}', 'GamesController@show')
        ->name('api.games.index');
    $api->put('games/{game}', 'GamesController@update')
        ->name('api.games.update');
    $api->delete('games/{game}', 'GamesController@destroy')
        ->name('api.groups.delete');
    $api->get('verify', function (Request $request){
        return response()->json([
            'status' => $request->get('password') === env('ADMIN_PASSWORD')
        ]);
    });
});
