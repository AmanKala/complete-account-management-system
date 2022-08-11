<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\TransactionRequest;
use App\Models\Transaction;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class TransController extends Controller
{
    public function createTransaction ()
    {
        return Inertia::render('CreateTransaction');
    }
    public function store (TransactionRequest $req)
    {
        // Validate and Save the values in database.
        Transaction::create($req->validated());
        return Redirect::route('home');
    }
}
