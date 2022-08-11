import React from "react";
import { Heading } from "../Components/Heading";
import { Inertia } from '@inertiajs/inertia';

const Home = () => {
    const handleTransaction =()=>{
        Inertia.get('createtransaction');
    }
    return (
        <>
            <Heading title="Hey There! Welcome..." />
            <button onClick={handleTransaction}>Create Transaction</button>
        </>
    );
};

export default Home;