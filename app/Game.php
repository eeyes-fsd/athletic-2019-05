<?php

namespace App;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Game
 * @package App
 *
 * @property int $id
 * @property string $name
 * @property int $participants_count
 * @property int $groups_count
 * @property Collection $groups
 * @property bool $reverse_sort
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property \Carbon\Carbon $begin_at
 */
class Game extends Model
{
    /**
     * The attributes that are not mass assignable
     *
     * @var array
     */
    protected $guarded = [
        'id', 'created_at', 'updated_at',
    ];

    /**
     * The attributes that should be converted to Carbon instance
     *
     * @var array
     */
    protected $dates = [
        'begin_at', 'created_at', 'updated_at',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function groups()
    {
        return $this->hasMany('App\Group');
    }
}
