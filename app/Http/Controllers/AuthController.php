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
        Session::flash('success','User created successfully');
        return Redirect::route('/');
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
                $req->session()->put('logged_user',$userInfo->id);
                return Redirect::route('home');
            }
            else
            {
                return back()->with('fail',"Incorrect Password");
            }
        }
    }

    function logout()
    {
        if(session()->has('logged_user'))
        {
            session()->pull('logged_user');
            return Redirect::route('login');
        }
    }
}
