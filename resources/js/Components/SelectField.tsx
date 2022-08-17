import React from "react";
type SelectProps={
    title: string
    name: string
    value: string
    dropdown: string[]
    onChange: (event: React.ChangeEvent<HTMLSelectElement>)=>void
}

const SelectField = (props: SelectProps) =>{
    return(
        <>
            <div>
                <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4">{props.title}</label>
                <select className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name={props.name} value={props.value} onChange={props.onChange} >
                    {
                        props.dropdown.map((ele)=>{
                            return(
                                <option value={ele} key={ele}> {ele} </option>
                            )
                        }) 
                    }
                </select>
            </div>
        </>
    )
}

export default SelectField;