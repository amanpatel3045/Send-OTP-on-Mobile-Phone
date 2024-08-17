'use client'

import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { app } from "../config";
import { useRouter } from "next/navigation";

export default function Dashboard() {

    const auth = getAuth(app);
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push('/')
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>
                Welcome to dashboard
            </h1>
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}