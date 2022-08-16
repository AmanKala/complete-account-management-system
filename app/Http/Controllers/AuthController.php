<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\AuthRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{ 
    public function home ()
    {
        return Inertia::render('Home');
    }
    
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
    
    public function check(Request $req)
    {
        // Validate Requests
        $req->validate([
            "email" => "required|email",
            "password" => "required|min:6"
        ]);

        // Retrive the information from database.
        $userInfo = User::where('email','=',$req->email)->first();
        
        // Login related functions to validate email and password.
        if(!$userInfo)
        {
            return back()->with('fail',"Email Not Found");
        }
        else
        {
            if(Hash::check($req->password,$userInfo->password))
            {
                Session::flash('logged_user','Logged In');
                return Redirect::route('home');
            }
            else
            {
                return back()->with('fail',"Incorrect Password");
            }
        }
    }
}
