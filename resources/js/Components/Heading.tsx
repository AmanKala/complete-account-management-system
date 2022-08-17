import React from "react";
type HeadingProps={
    title: string
}

export const Heading = (props: HeadingProps) =>{
    return(
        <>
            <h1 className="text-xl text-center text-gray-700 font-bold hover:text-red-700">{props.title}</h1>
            <hr />
        </>
    )
} 
