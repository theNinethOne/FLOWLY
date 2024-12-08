"use client"

import { useRouter } from "next/navigation";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Hero() {
    const router = useRouter()

    return(
        <>
            <Navbar/>
            <div>
                Page content
                <button onClick={ () => router.push( "/profile" ) }>Get Started</button>
            </div>
            <Footer/>
        </>
    )
}