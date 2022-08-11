<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TransController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/home', [AuthController::class, 'home'])->name('home');


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

Route::get('/register', [AuthController::class, 'register'])->name('register');
Route::post('/register', [AuthController::class, 'store'])->name('register.store');

Route::get('/login', [AuthController::class, 'login'])->name('login');
Route::post('/login', [AuthController::class, 'check'])->name('login.check');

Route::get('/createtransaction', [TransController::class, 'createTransaction'])->name('createtransaction');
Route::post('/createtransaction', [TransController::class, 'store'])->name('createtransaction.store');
