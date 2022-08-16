import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";

const Navbar = () =>{
    return(
        <>
            <nav className="w-full bg-stone-500 shadow p-1">
            <InertiaLink href="/" className="bg-transparent font-semibold hover:underline text-white hover:text-green-200 px-4 hover:border-transparent rounded">Home</InertiaLink>
            <InertiaLink href="/transationlist" className="bg-transparent font-semibold hover:underline text-white hover:text-green-200 px-4 hover:border-transparent rounded">Transaction List</InertiaLink>
            <InertiaLink href="/createtransaction" className="bg-transparent font-semibold hover:underline text-white hover:text-green-200 px-4 hover:border-transparent rounded">Create Transaction</InertiaLink>

            <InertiaLink href="/logout" className="bg-transparent font-semibold hover:underline text-white hover:text-red-400 px-4 hover:border-transparent rounded">Logout</InertiaLink>
            </nav>
        </>
    )
}

export default Navbar;
