import React, { useState } from "react";
import { Inertia } from '@inertiajs/inertia';
import {Heading} from "../Components/Heading";
import InputField from "../Components/InputField";
import { InertiaLink, useForm } from '@inertiajs/inertia-react'

const Register = () =>{
    const { data, setData, post, processing, errors } = useForm({
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        re_enter_password:"",
      })

    const handleData = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        post('/register', {
            onSuccess: page => {setData({
                first_name:"",
                last_name:"",
                email:"",
                password:"",
                re_enter_password:"",
            });},
        });
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
            <div className="px-8 py-4 mx-4 mt-2 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3 rounded" >
            <Heading title="Register" />
            <form onSubmit={handleData} className="">
                <InputField title="First Name" name="first_name" value={data.first_name} type="text" onChange={handleInput} />
                {errors.first_name && <div className="text-xs text-red-600">{errors.first_name}</div>}
                <InputField title="Last Name" name="last_name" value={data.last_name} type="text" onChange={handleInput} />
                {errors.last_name && <div className="text-xs text-red-600">{errors.last_name}</div>}
                <InputField title="Email Id" name="email" value={data.email} type="email" onChange={handleInput} />
                {errors.email && <div className="text-xs text-red-600">{errors.email}</div>}
                <InputField title="Password" name="password" value={data.password} type="password" onChange={handleInput} />
                {errors.password && <div className="text-xs text-red-600">{errors.password}</div>}
                <InputField title="RE-Enter Password" name="re_enter_password" value={data.re_enter_password} type="password" onChange={handleInput} />
                {errors.re_enter_password && <div className="text-xs text-red-600">{errors.re_enter_password}</div>}

                <button type="submit" className="bg-green-700 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded mt-2">Register</button>
                <div className="mt-2 ">
                    Already a User?
                    <InertiaLink href="/login" className="text-blue-600 hover:underline">Login</InertiaLink>
                </div>
            </form>
            </div>
            </div>
        </>
    )
}

export default Register;
