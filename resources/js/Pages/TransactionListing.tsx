import React from "react";
import { Heading } from "../Components/Heading";
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from "@inertiajs/inertia-react";

type ListProps=any;
const TransactionListing = (props:ListProps) =>{
    const handleClick = () =>{
        Inertia.get('createtransaction');
    }
    const showPromt = (id:any) => {
        if(window.confirm('Delete this transaction?')){
            const url=`/delete/${id}`;
            Inertia.get(url);
        }
    }
    const generateReceipt = (id:any) =>{
        const url=`/receipt/${id}`;
        Inertia.get(url);
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
                                <tr key={trans.id} className="border-b text-center">
                                    <td> {trans.title} </td>
                                    <td> {trans.date} </td>
                                    <td> {trans.paid_by_to} </td>
                                    <td> {trans.amount*trans.quantity} </td>
                                    <td> {trans.type} </td>
                                    <td> {trans.status} </td>
                                    <td> {trans.utr} </td>
                                    <td> {trans.project} </td>
                                    <td> 
                                        <InertiaLink href={`/edit/${trans.id}`} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded">Edit</InertiaLink>
                                        <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white px-4 border border-red-500 hover:border-transparent rounded" onClick={()=>{showPromt(trans.id)}}>Delete</button>
                                         
                                        <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white px-4 border border-green-500 hover:border-transparent rounded" onClick={()=>{generateReceipt(trans.id)}}>Generate Receipt</button> 
                                    </td>
                                </tr>
                            )
                        })
                       } 
                </tbody>
            </table>
            <br/>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-5" onClick={handleClick}>Create Transaction</button>
        </>
    )
}

export default TransactionListing;