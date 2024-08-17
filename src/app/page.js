'use client'

import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./config";
import { useEffect } from "react";
import Login from "./login";

export default function Home() {

  const router = useRouter()
  const auth = getAuth(app)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('./dashboard');
      }
    });
  }, [auth, router]);


  return (
    <main className={styles.main}>
      <h1>Firebase OTP Sign in</h1>
      <Login />
    </main>
  );
}
