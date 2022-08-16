import React from "react";
import { Heading } from "../Components/Heading";
import { Inertia } from '@inertiajs/inertia';
import Navbar from "../Components/Navbar";

const Home = ({logged_user}:any) => {
    return (
        <>
            <Navbar/>
            {console.log(logged_user)}
            <Heading title="Hey There! Welcome..." />
        </>
    );
};

export default Home;