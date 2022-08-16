<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'logged_user'=>session()->get('logged_user')
        ]);
    }
    // Inertia::share('appName', config('app.name'));
    public function handle(Request $request, Closure $next)
    {
        
        if(!session()->has('logged_user') && ($request->path() != '/login' && $request->path() != '/register') )
        {
            return Redirect::route('/login');
        }
        return $next($request);
    }
}
