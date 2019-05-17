<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games', function (Blueprint $table) {
            $table->increments('id');
            $table->boolean('reverse_sort');
            $table->string('name')->comment('赛事名称');
            $table->timestamp('begin_at')->nullable()->comment('开始时间');
            $table->integer('participants_count')->nullable()->comment('参赛人数');
            $table->integer('groups_count')->nullable()->comment('参赛组数');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('games');
    }
}
