import React from "react";
import { Heading } from "../Components/Heading";

const Receipt = ({transaction_data}:any) =>{
    return(
        <>
            <Heading title="Receipt" />
            <div>
                <span>{transaction_data.title}</span>
            </div>
        </>
    )
}

export default Receipt;
