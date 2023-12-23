"use client";
import Link from "next/link";
import Image from "next/image";
import './nav.module.css'
// import { useState, useEffect } from "react";
// import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
    // const {data: session} = useSession();

    // const [providers, setProviders] = useState(null);
    // const [toggleDropdown, setToggleDropdown] = useState(false);

    // useEffect(() => {
    //     (async () => {
    //       const res = await getProviders();
    //       setProviders(res);
    //     })();
    // }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
            <Image 
            src="/logo.svg"
            alt="Books Logo"
            width={30}
            height={30}
            className="object-contain"
            />
            <p className="logo_text">NICER CAVES</p>
        </Link>
                <div className="flex gap-3 md:gap-5">
                    <Link href="/news" className="black_btn">
                        News
                    </Link>

                    <Link href="/find" className="black_btn">
                        Find a Cave
                    </Link>
                </div>
        
    </nav>
  )
}

export default Nav