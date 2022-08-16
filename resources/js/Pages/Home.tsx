import React from "react";
import { Heading } from "../Components/Heading";
import { Inertia } from '@inertiajs/inertia';
import Navbar from "../Components/Navbar";

const Home = () => {
    return (
        <>
            <Navbar/>
            <Heading title="Hey There! Welcome..." />
        </>
    );
};

export default Home;