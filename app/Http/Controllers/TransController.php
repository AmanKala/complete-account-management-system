<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\TransactionRequest;
use App\Models\Transaction;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use PDF;

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
        return Redirect::route('transationlist');
    }
    public function transationlist ()
    {
        $data = Transaction::all();
        return Inertia::render('TransactionListing',['data'=>$data]);
    }
    public function edit($id)
    {
        $transaction=Transaction::find($id);
        return Inertia::render('Edit',['transaction'=>$transaction]);
    }
    public function update (Request $req)
    {
        $data = Transaction::find($req->id);
        $data->title=$req->title;
        $data->date=$req->date;
        $data->paid_by_to=$req->paid_by_to;
        $data->amount=$req->amount;
        $data->quantity=$req->quantity;
        $data->unit_name=$req->unit_name;
        $data->type=$req->type;
        $data->status=$req->status;
        $data->utr=$req->utr;
        $data->project=$req->project;
        $data->comment=$req->comment;
        $data->save();
        return Redirect::route('transationlist');
    }
    public function delete ($id)
    {
        $data=Transaction::find($id);
        $data->delete();
        return Redirect::route('transationlist');
    }
    public function generatePDF($id)
    {
        // $data = Transaction::find($id);
        // $transaction_data = [
        //     'data' => $data,
        // ];

        // $pdf = PDF::loadView('Receipt', $transaction_data);
    
        // return $pdf->download('Receipt.pdf');
    }
}
