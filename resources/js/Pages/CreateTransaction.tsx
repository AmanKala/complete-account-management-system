import React, { useState } from "react";
import { Inertia } from '@inertiajs/inertia';
import {Heading} from "../Components/Heading";
import InputField from "../Components/InputField";
import SelectField from "../Components/SelectField";

const CreateTransaction = () =>{
    const [transaction, setTransaction] = useState({
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
        const newEntry={id:new Date().getTime().toString(), title: transaction.title, date:transaction.date, amount:transaction.amount, status:transaction.status}
        setTransaction({
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
        });
        console.log(transaction);
        Inertia.post('/createtransaction', transaction);
    }

    let name,value;
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
        name = event.target.name;
        value= event.target.value;

        setTransaction({...transaction, [name]:value});
        console.log(transaction);
    }
    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        name = event.target.name;
        value= event.target.value;

        setTransaction({...transaction, [name]:value});
    }

    return(
        <>
            <Heading title="Create Transaction" />
            <form onSubmit={handleData}>
                <InputField title="Title" name="title" value={transaction.title} type="text" onChange={handleInput} />
                <InputField title="Date" name="date" value={transaction.date} type="date" onChange={handleInput} />
                <InputField title="Paid by/to" name="paid_by_to" value={transaction.paid_by_to} type="text" onChange={handleInput} />
                <InputField title="Amount" name="amount" value={transaction.amount} type="number" onChange={handleInput} />
                <InputField title="quantity" name="quantity" value={transaction.quantity} type="number" onChange={handleInput} />
                <InputField title="Unit Name" name="unit_name" value={transaction.unit_name} type="text" onChange={handleInput} />
                <SelectField title="Type" name="type" dropdown={['Expense','Revenue']} value={transaction.type} onChange={handleSelect} />
                <SelectField title="Status" name="status" dropdown={['Due','Cancled','Cleared']} value={transaction.status} onChange={handleSelect} />
                <InputField title="UTR" name="utr" value={transaction.utr} type="text" onChange={handleInput} />
                <InputField title="Project" name="project" value={transaction.project} type="text" onChange={handleInput} />
                <InputField title="Comment" name="comment" value={transaction.comment} type="text" onChange={handleInput} />

                <button type="submit">Create Transaction</button>
            </form>

        </>
    )
}

export default CreateTransaction;
