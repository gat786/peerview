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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    const { username, password } = watch();
    Moralis.User.signUp(username, password, {});
  };

  return (
    <div className={styles.dividedLoginContainer}>
      <div className="">

      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={`${styles.loginForm}`}>
        <input
          {...register("username", { required: true })}
          placeholder="Username"
        />
        {errors.username && "Username is required"}
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
        />
        {errors.password && "Password is required"}
        <button>Submit</button>
      </form>
    </div>
  );
}
