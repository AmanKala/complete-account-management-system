<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TransController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [AuthController::class, 'home'])->name('home');


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

Route::get('/register', [AuthController::class, 'register'])->name('register');
Route::post('/register', [AuthController::class, 'store'])->name('register.store');

Route::get('/login', [AuthController::class, 'login'])->name('login');
Route::post('/login', [AuthController::class, 'check'])->name('login.check');

Route::get('/createtransaction', [TransController::class, 'createTransaction'])->name('createtransaction');
Route::post('/createtransaction', [TransController::class, 'store'])->name('createtransaction.store');

Route::get('/transationlist', [TransController::class, 'transationlist'])->name('transationlist');

Route::get('/edit/{id}', [TransController::class, 'edit'])->name('edit');
Route::post('/edit', [TransController::class, 'update'])->name('update');

Route::get('delete/{id}',[TransController::class, 'delete'])->name('delete');

Route::get('receipt/{id}', [TransController::class,'generatePDF'])->name('receipt');