import { useProfile } from "../../hooks/useProfile";
import styles from "./Profile.module.css";

const Profile = () => {
  const { register, handleSubmit, errors, onSubmit } = useProfile();

  return (
    <div className={styles.profileContainer}>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formGroup}>
          <label>Name:</label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Enter your name"
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <label>Email:</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>

        <button type="submit" className={styles.saveButton}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
