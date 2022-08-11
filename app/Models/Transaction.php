<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Transaction extends Model
{
    public $table = 'transactions';

    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'date',
        'paid_by_to',
        'amount',
        'quantity',
        'unit_name',
        'type',
        'status',
        'utr',
        'project',
        'comment',
        'invoice_number'
    ];

    public static function boot()
    {
        parent::boot();
        static::creating(function($model){
            $last_record = DB::table('transactions')->latest()->first();
            $entry_number = 0;
            $zeros = 0;
            if(optional($last_record)->date == $model->date)
            {
                $prev_integer = (int)substr($last_record->invoice_number, -2);
                $entry_number = $prev_integer+1;
                if($entry_number>9)
                {
                    $zeros = "";
                }
            }
            $str = str_replace("-","",$model->date);
            $model->invoice_number='STSINV/'.$str.$zeros.$entry_number;
        });
    }
}
