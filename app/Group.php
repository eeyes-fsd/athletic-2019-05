<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Group
 * @package App
 *
 * @property int $id
 * @property int $game_id
 * @property int $no
 * @property array $content
 * @property Game $game
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
class Group extends Model
{
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function game()
    {
        return $this->belongsTo('App\Game');
    }

    public function getContentAttribute($value)
    {
        return unserialize($value);
    }

    public function setContentAttribute($value)
    {
        $this->attributes['content'] = serialize($value);
    }
}
