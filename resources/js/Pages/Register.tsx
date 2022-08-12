import React, { useState } from "react";
import { Inertia } from '@inertiajs/inertia';
import {Heading} from "../Components/Heading";
import InputField from "../Components/InputField";
import { useForm } from '@inertiajs/inertia-react'

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
            <Heading title="Register Page" />
            <form onSubmit={handleData}>
                <InputField title="First Name" name="first_name" value={data.first_name} type="text" onChange={handleInput} />
                {errors.first_name && <div>{errors.first_name}</div>}
                <InputField title="Last Name" name="last_name" value={data.last_name} type="text" onChange={handleInput} />
                {errors.last_name && <div>{errors.last_name}</div>}
                <InputField title="Email Id" name="email" value={data.email} type="email" onChange={handleInput} />
                {errors.email && <div>{errors.email}</div>}
                <InputField title="Password" name="password" value={data.password} type="password" onChange={handleInput} />
                {errors.password && <div>{errors.password}</div>}
                <InputField title="RE-Enter Password" name="re_enter_password" value={data.re_enter_password} type="password" onChange={handleInput} />
                {errors.re_enter_password && <div>{errors.re_enter_password}</div>}

                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default Register;
