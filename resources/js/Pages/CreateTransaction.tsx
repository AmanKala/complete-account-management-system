import React, { useState } from "react";
import {Heading} from "../Components/Heading";
import InputField from "../Components/InputField";
import SelectField from "../Components/SelectField";
import { useForm } from '@inertiajs/inertia-react'

const CreateTransaction = () =>{
    const { data, setData, post, processing, errors } = useForm({
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
      })

    const handleData = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const newEntry={id:new Date().getTime().toString(), title: data.title, date:data.date, amount:data.amount, status:data.status}
        post('/createtransaction',{
            onSuccess: page => {setData({
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
        console.log(data);
    }

    let name,value;
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
        name = event.target.name;
        value= event.target.value;

        setData({...data, [name]:value});
        console.log(data);
    }
    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        name = event.target.name;
        value= event.target.value;

        setData({...data, [name]:value});
    }

    return(
        <>
            <Heading title="Create Transaction" />
            <form onSubmit={handleData} className="m-5">
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
                <InputField title="Comment" name="comment" value={data.comment} type="text" onChange={handleInput} />
                {errors.comment && <div>{errors.comment}</div>}

                <button type="submit" className="bg-sky-500 hover:bg-sky-700">Create Transaction</button>
            </form>

        </>
    )
}

export default CreateTransaction;
