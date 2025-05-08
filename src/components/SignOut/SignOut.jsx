"use client";
import { useRouter } from "next/navigation";
import styles from "./SignOut.module.css";

const SignOut = () => {
  const router = useRouter();
  const handleSignOut = () => {
    localStorage.removeItem("user");
    router.replace("/");
  };

  return (
    <button className={styles.signout} onClick={handleSignOut}>
      Sign Out
    </button>
  );
};

export default SignOut;
