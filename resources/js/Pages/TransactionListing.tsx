import React from "react";
import { Heading } from "../Components/Heading";
type ListProps={
    allTrans:{
        id:string
        title:string
        date:string
        amount:number
        status: string
    }[]
}

const TransactionListing = (props:ListProps) =>{
    return(
        <>
            <Heading title='Transaction List' />
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
                        props.allTrans.map((trans)=>{
                            return(
                                <tr key={trans.id} className="border-b text-center">
                                <td>{trans.title}</td>
                                <td>{trans.date}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>{trans.status}</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button>EDIT</button>
                                </td>
                            </tr> 
                            )
                        })
                    }
                </tbody>
            </table>
            <br/>
            <button>Create Transaction</button>
        </>
    )
}

export default TransactionListing;