import React, { useState } from "react";
import {Heading} from "../Components/Heading";
import InputField from "../Components/InputField";
import { useForm } from '@inertiajs/inertia-react'

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
            <Heading title="Login Page" />
            <form onSubmit={handleData}>
                <InputField title="Email Id" name="email" value={data.email} type="email" onChange={handleInput} />
                {errors.email && <div>{errors.email}</div>}
                <InputField title="Password" name="password" value={data.password} type="password" onChange={handleInput} />
                {errors.password && <div>{errors.password}</div>}

                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Register;
