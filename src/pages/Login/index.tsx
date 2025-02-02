import React from "react";
import { useLogin } from "../../hooks/useLogin";
import styles from "./Login.module.css";

const Login: React.FC = () => {
  const { register, handleSubmit, errors, onSubmit } = useLogin();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address.",
              },
            })}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            {...register("password", { required: "Password is required." })}
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}

          {errors.root && <p className={styles.error}>{errors.root.message}</p>}

          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
