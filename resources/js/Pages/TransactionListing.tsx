import React from "react";
import { Heading } from "../Components/Heading";
import { Inertia } from '@inertiajs/inertia';

type ListProps=any;
const TransactionListing = (props:ListProps) =>{
    const handleClick = () =>{
        Inertia.get('createtransaction');
    }
    return(
        <>
            <Heading title='Transaction List' />
            {console.log(props)}
            <table className="table-auto min-w-full mt-5">
                <thead className="border-b">
                    <tr>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Paid To/By</th>
                        <th>Total</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>UTR</th>
                        <th>Project</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                       {
                        props.data.map((trans: any)=>{
                            return(
                                <tr key={trans.id}>
                                    <td> {trans.title} </td>
                                    <td> {trans.date} </td>
                                    <td> {trans.paid_by_to} </td>
                                    <td> {trans.amount*trans.quantity} </td>
                                    <td> {trans.type} </td>
                                    <td> {trans.status} </td>
                                    <td> {trans.utr} </td>
                                    <td> {trans.project} </td>
                                    <td> 
                                        <button>Edit</button> 
                                        <button>Delete</button> 
                                        <button>Generate Receipt</button> 
                                    </td>
                                </tr>
                            )
                        })
                       } 
                </tbody>
            </table>
            <br/>
            <button onClick={handleClick}>Create Transaction</button>
        </>
    )
}

export default TransactionListing;