import React, { useState } from "react";
import {Heading} from "../Components/Heading";
import InputField from "../Components/InputField";
import { InertiaLink, useForm } from '@inertiajs/inertia-react'

const Register = () =>{
    const { data, setData, post, processing, errors } = useForm({
        email:"",
        password:"",
      })
    const handleData = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        post('/login');
    }
    let name,value;
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
        name = event.target.name;
        value= event.target.value;
        setData({...data,[name]:value});
    }
    return(
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-4 mx-4 mt-2 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3" >
            <Heading title="Login Page" />
            <form onSubmit={handleData}>
                <InputField title="Email Id" name="email" value={data.email} type="email" onChange={handleInput} />
                {errors.email && <div className="text-xs text-red-600">{errors.email}</div>}
                <InputField title="Password" name="password" value={data.password} type="password" onChange={handleInput} />
                {errors.password && <div className="text-xs text-red-600">{errors.password}</div>}

                <button type="submit" className="bg-green-700 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded mt-2">Login</button>
                <div className="mt-2 ">
                    Need an Account?
                    <InertiaLink href="/register" className="text-blue-600 hover:underline">Register Here</InertiaLink>
                </div>
            </form>
            </div>
            </div>
        </>
    )
}

export default Register;
