import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

interface LoginFormInputs {
  email: string;
  password: string;
}

export const useLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    const { email, password } = data;

    // TODO
    // Hardcoded credentials
    const validEmail = "user@example.com";
    const validPassword = "password123";

    // Validate credentials
    if (email !== validEmail || password !== validPassword) {
      setError("root", {
        type: "manual",
        message: "Invalid email or password.",
      });
      return;
    }

    // Extract name from email (before "@")
    const name = email.split("@")[0];

    // Simulate login
    const user = { name, email };
    login(user);
    navigate("/"); // Redirect to dashboard
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
