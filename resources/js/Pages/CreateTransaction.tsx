import React, { useState } from "react";
import {Heading} from "../Components/Heading";
import InputField from "../Components/InputField";
import SelectField from "../Components/SelectField";

const CreateTransaction = () =>{
    const [transaction, setTransaction] = useState({
        title:'',
        date:'',
        amount:'',
        status:'',
    })
    const [allTrans,setAllTrans]=useState([{}]);

    const handleData = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const newEntry={id:new Date().getTime().toString(), title: transaction.title, date:transaction.date, amount:transaction.amount, status:transaction.status}
        setTransaction({
            title:'',
            date:'',
            amount:'',
            status:'',
        });
        setAllTrans([...allTrans,newEntry]);
        console.log(allTrans);
    }

    let name,value;
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
        name = event.target.name;
        value= event.target.value;

        setTransaction({...transaction, [name]:value});
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
                <InputField title="Amount" name="amount" value={transaction.amount} type="number" onChange={handleInput} />
                <SelectField title="Status" name="status" dropdown={['Due','Cancled','Cleared']} value={transaction.status} onChange={handleSelect} />

                <button type="submit">Create Transaction</button>
            </form>

            <Heading title="Transaction List"/>
        </>
    )
}

export default CreateTransaction;
