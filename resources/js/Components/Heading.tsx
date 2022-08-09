import React from "react";
type HeadingProps={
    title: string
}

export const Heading = (props: HeadingProps) =>{
    return(
        <>
            <h1 className="text-xl text-center font-bold underline">{props.title}</h1>
        </>
    )
} 
