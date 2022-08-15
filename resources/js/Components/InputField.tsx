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
                <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4">{props.title}</label>
                {
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type={props.type} name={props.name} value={props.value} onChange={props.onChange} />
                }
            </div>
        </>
    )

}

export default InputField;
