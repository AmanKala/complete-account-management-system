import React, { useState } from "react";
import {Heading} from "../Components/Heading";
import InputField from "../Components/InputField";

const Register = () =>{
    const [user,setUser] = useState({
        email:"",
        password:"",
    })
    const handleData = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(user);
    }
    let name,value;
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
        name = event.target.name;
        value= event.target.value;
        setUser({...user,[name]:value});
    }
    return(
        <>
            <Heading title="Login Page" />
            <form onSubmit={handleData}>
                <InputField title="Email Id" name="email" value={user.email} type="email" onChange={handleInput} />
                <InputField title="Password" name="password" value={user.password} type="password" onChange={handleInput} />

                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Register;
