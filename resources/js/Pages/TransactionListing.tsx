import React from "react";
import { Heading } from "../Components/Heading";
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from "@inertiajs/inertia-react";
import Navbar from "../Components/Navbar";

type ListProps=any;
const TransactionListing = (props:ListProps) =>{
    const edit = (id:any) =>{
        const url=`/edit/${id}`;
        Inertia.get(url);
    }
    const showPromt = (id:any) => {
        if(window.confirm('Hold On Sparky.... Really want to Delete this transaction?')){
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
            <Navbar/>
            <Heading title='Transaction List' />
            {console.log(props)}
            <div className="flex justify-center h-full bg-gray-100">
            <div className="p-5 mt-4 mb-4 bg-white shadow-lg md:w-9.5/10 lg:w-9.5/10 sm:w-9.5/10 rounded" >
            <table className="table-auto min-w-full text-xs">
                <thead className="border-b bg-stone-200">
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
                                        <button className="bg-blue-600 hover:bg-blue-500 text-white px-2 rounded mr-1" onClick={()=>{edit(trans.id)}}>Edit</button>
                                        <button className="bg-red-600 hover:bg-red-500 text-white px-2 rounded mr-1" onClick={()=>{showPromt(trans.id)}}>Delete</button>
                                        <button className="bg-green-600 hover:bg-green-500 text-white px-2 rounded" onClick={()=>{generateReceipt(trans.id)}}>Generate Receipt</button> 
                                    </td>
                                </tr>
                            )
                        })
                       } 
                </tbody>
            </table>
            </div>
            </div>
        </>
    )
}

export default TransactionListing;