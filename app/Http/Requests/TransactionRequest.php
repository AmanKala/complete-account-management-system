<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TransactionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'title' => "required",
            'date' => "required",
            'paid_by_to' => "required",
            'amount' => "required",
            'quantity' => "required",
            'unit_name' => "required",
            'type' => "required",
            'status' => "required",
            'utr' => "nullable",
            'project' => "required",                 
            'comment' => "nullable"
        ];
    }
}
