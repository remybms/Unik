import Link from "next/link"
import React from 'react'
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase"
import Header from "../../components/header"

export default function profile(){

    const router = useRouter();

    const UserSignOut = () => {
        signOut(auth).then(() => {
            router.push("/");
          }).catch((error) => {
            console.log(error)
          });
    }

    return(
        <><Header />
        <Link href='/' onClick={UserSignOut}>Déconnexion</Link></>
    )
}

