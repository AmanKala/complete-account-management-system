import React from "react";
type InputProps={
    title: string
    type: string
    name: string 
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>)=>void
}

const InputField = (props: InputProps) =>
{
    return(
        <>
            <div>
                <label >{props.title}</label>
                <br/>
                {
                    <input className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 focus:shadow-outline" type={props.type} name={props.name} value={props.value} onChange={props.onChange} />
                }
                <br/><br/>
            </div>
        </>
    )

}

export default InputField;
