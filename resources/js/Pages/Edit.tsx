import React, { useState } from "react";
import {Heading} from "../Components/Heading";
import InputField from "../Components/InputField";
import SelectField from "../Components/SelectField";
import { useForm } from '@inertiajs/inertia-react'

const Edit = ({transaction}:any) =>{
    const { data, setData, post, processing, errors } = useForm({
        title:transaction.title,
        id:transaction.id,
        date:transaction.date,
        paid_by_to:transaction.paid_by_to,
        amount:transaction.amount,
        quantity:transaction.quantity,
        unit_name:transaction.unit_name,
        type:transaction.type,
        status:transaction.status,
        utr:transaction.utr,
        project:transaction.project,
        comment:transaction.comment,
      })

    const handleData = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        post('/edit',{
            onSuccess: page => {setData({
                id:'',
                title:'',
                date:'',
                paid_by_to:'',
                amount:'',
                quantity:'',
                unit_name:'',
                type:'',
                status:'',
                utr:'',
                project:'',
                comment:'',
            });},
        });
    }

    let name,value;
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
        name = event.target.name;
        value= event.target.value;

        setData({...data, [name]:value});
    }
    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        name = event.target.name;
        value= event.target.value;

        setData({...data, [name]:value});
    }

    return(
        <>
            <Heading title="Edit Transaction" />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-2 mx-4 mt-1 text-left bg-white shadow-lg md:w-4/5 lg:w-4/5 sm:w-4/5 rounded" >
            <form onSubmit={handleData} className="m-5">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <InputField title="" name="id" value={data.title} type="hidden" onChange={handleInput} />
                        <InputField title="Title" name="title" value={data.title} type="text" onChange={handleInput} />
                        {errors.title && <div>{errors.title}</div>}
                        <InputField title="Date" name="date" value={data.date} type="date" onChange={handleInput} />
                        {errors.date && <div>{errors.date}</div>}
                        <InputField title="Paid by/to" name="paid_by_to" value={data.paid_by_to} type="text" onChange={handleInput} />
                        {errors.paid_by_to && <div>{errors.paid_by_to}</div>}
                        <InputField title="Amount" name="amount" value={data.amount} type="number" onChange={handleInput} />
                        {errors.amount && <div>{errors.amount}</div>}
                        <InputField title="Quantity" name="quantity" value={data.quantity} type="number" onChange={handleInput} />
                        {errors.quantity && <div>{errors.quantity}</div>}
                    </div>
                    <div>
                        <InputField title="Unit Name" name="unit_name" value={data.unit_name} type="text" onChange={handleInput} />
                        {errors.unit_name && <div>{errors.unit_name}</div>}
                        <SelectField title="Type" name="type" dropdown={['Expense','Revenue']} value={data.type} onChange={handleSelect} />
                        {errors.type && <div>{errors.type}</div>}
                        <SelectField title="Status" name="status" dropdown={['Due','Cancled','Cleared']} value={data.status} onChange={handleSelect} />
                        {errors.status && <div>{errors.status}</div>}
                        <InputField title="UTR" name="utr" value={data.utr} type="text" onChange={handleInput} />
                        {errors.utr && <div>{errors.utr}</div>}
                        <InputField title="Project" name="project" value={data.project} type="text" onChange={handleInput} />
                        {errors.project && <div>{errors.project}</div>}
                    </div>
                </div>
                <InputField title="Comment" name="comment" value={data.comment} type="text" onChange={handleInput} />
                {errors.comment && <div>{errors.comment}</div>}

                <button type="submit" className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-2 w-full">Edit Transaction</button>
            </form>
            </div>
            </div>
        </>
    )
}

export default Edit;
