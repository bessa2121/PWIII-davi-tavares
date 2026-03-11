<?php

use Illuminate\Support\Facades\Route;

Route::get('/jogo-da-velha', function () {
    return view('jogo');
});