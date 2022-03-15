import React from "react";
import { useForm } from "react-hook-form";
import { useMoralis } from "react-moralis";

import styles from "./pages.module.scss";

interface LoginForm {
  username: string;
  password: string;
}

export default function LoginPage() {
  const { authenticate, user, Moralis } = useMoralis();

  return (
    <div className={styles.dividedLoginContainer}>
      <div className=""></div>
      <div>
        <button
          onClick={() => {
            authenticate({
              provider: "web3Auth",
              clientId: process.env.NEXT_PUBLIC_WEB3_CLIENTID,
            });
          }}
        >
          Login or Signup
        </button>
      </div>
    </div>
  );
}
