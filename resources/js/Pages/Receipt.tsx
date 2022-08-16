import React from "react";
import { Heading } from "../Components/Heading";
import jsPDF from "jspdf";
import Navbar from "../Components/Navbar";

const Receipt = ({transaction}:any) =>{
    const downloadPDF = () =>{
        let doc = new jsPDF("p","pt","a4");
        doc.html(document.querySelector("#receipt") as HTMLInputElement,{
            callback: function(pdf){
                pdf.save("Receipt.pdf");
            }
        });
    }
    return(
        <>
            <Navbar/>
            <button onClick={downloadPDF} className="bg-green-600 hover:bg-green-500 text-white px-2 rounded m-2">Download PDF</button>
            <br />
            <div id="receipt">
                <h1 className="text-center"><b>Transaction Receipt</b></h1>
                <br />
                <div className="m-5">
                    <span><b>Title : &nbsp;</b> </span>
                    <span>{transaction.title}</span>
                    <br />
                    <span><b>Project : &nbsp;</b> </span>
                    <span>{transaction.project}</span>
                    <br />
                    <span><b>Status : &nbsp;</b> </span>
                    <span>{transaction.status}</span>
                    <br />
                    <span><b>Type : &nbsp;</b> </span>
                    <span>{transaction.type}</span>
                    <br />
                    <span><b>Amount : &nbsp;</b> </span>
                    <span>{transaction.unit} {transaction.amount*transaction.quantity}</span>
                    <br />
                </div>
            </div>
        </>
    )
}

export default Receipt;
