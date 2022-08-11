import React, { useState } from "react";
import { Inertia } from '@inertiajs/inertia';
import {Heading} from "../Components/Heading";
import InputField from "../Components/InputField";

const Register = () =>{

    const [user,setUser] = useState({
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        re_enter_password:"",
    })
    const handleData = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(user);
        Inertia.post('/register', user);
    }
    let name,value;
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
        name = event.target.name;
        value= event.target.value;
        setUser({...user,[name]:value});
    }
    return(
        <>
            <Heading title="Register Page" />
            <form onSubmit={handleData}>
                <InputField title="First Name" name="first_name" value={user.first_name} type="text" onChange={handleInput} />
                <InputField title="Last Name" name="last_name" value={user.last_name} type="text" onChange={handleInput} />
                <InputField title="Email Id" name="email" value={user.email} type="email" onChange={handleInput} />
                <InputField title="Password" name="password" value={user.password} type="password" onChange={handleInput} />
                <InputField title="RE-Enter Password" name="re_enter_password" value={user.re_enter_password} type="password" onChange={handleInput} />

                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default Register;
