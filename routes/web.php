<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', function () {
    return view('dashboard.dashboard');
});

Route::get('/form1', function () {
    return view('formularios.form1');
});

Route::get('/form2', function () {
    return view('formularios.form2');
});

Route::get('/form3', function () {
    return view('formularios.form3');
});