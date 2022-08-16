import React from "react";
import { Heading } from "../Components/Heading";
import jsPDF from "jspdf";

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
            <button onClick={downloadPDF} className="bg-green-600 hover:bg-green-500 text-white px-2 rounded">Download PDF</button>
            <div id="receipt">
                <Heading title="Receipt" />
                <div className="text-center">
                    <span>Title : &nbsp; </span>
                    <span>{transaction.title}</span>
                    <br />
                    <span>Project : &nbsp; </span>
                    <span>{transaction.project}</span>
                    <br />
                    <span>Amount : &nbsp; </span>
                    <span>{transaction.amount}</span>
                    <br />
                </div>
            </div>
        </>
    )
}

export default Receipt;
