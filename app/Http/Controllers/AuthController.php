<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\AuthRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AuthController extends Controller
{ 
    public function register (Request $req)
    {
        return Inertia::render('Register');
    }
    public function login (Request $req)
    {
        return Inertia::render('Login');
    }
    public function store (AuthRequest $req)
    {
        // Validate and Save the values in database.
        User::create($req->validated());
        return Redirect::route('login');
    }
}
