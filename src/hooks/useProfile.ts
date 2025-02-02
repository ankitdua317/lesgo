import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import User from "../types/User";

export const useProfile = () => {
  const { user, setUser } = useAuth();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<User>();

  useEffect(() => {
    if (user?.name) setValue("name", user.name);
    if (user?.email) setValue("email", user.email);
  }, [user, setValue]);

  const onSubmit: SubmitHandler<User> = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
    alert("Profile updated successfully!");
  };

  return { register, handleSubmit, errors, onSubmit };
};
