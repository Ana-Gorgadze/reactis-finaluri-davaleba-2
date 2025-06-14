"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [login, setLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLoginChange = () => {
    return setLogin(!login);
  };

  const checkIfUserExists = async () => {
    const result = await JSON.parse(localStorage.getItem("user"));

    if (result !== null) {
      router.replace("/products", { path: "products" });
    }
  };

  useEffect(() => {
    checkIfUserExists();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    try {
      fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: "m38rmF$",
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.token) {
            localStorage.setItem("user", JSON.stringify(res.token));
            router.replace("/products", { path: "products" });
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  };




  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          username: username,
          password: password,
          name: {
            firstname: "john",
            lastname: "doe",
          },
          address: {
            city: "kilcoole",
            street: "new road",
            number: 7682,
            zipcode: "12926-3874",
            geolocation: {
              lat: "-37.3159",
              long: "81.1496",
            },
          },
          phone: "1-570-236-7033",
        }),
      });
      const data = await res.json();
      if (data.id) {
        router.replace("/products");
      } else {
        alert("Registration failed!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main className={styles.main}>
      {login ? (
        <form onSubmit={handleLogin} className={styles.container}>
          <div className={styles.conti}>
            <h3 className={styles.signin}>Sign In</h3>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.input}
              placeholder="Username"
              required
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              type="password"
              placeholder="Password"
              required
            />
            <button className={styles.button} type="submit">
              Sign In
            </button>
            <button
              type="button"
              onClick={handleLoginChange}
              className={styles.notResgitered}
            >
              Not Registered? Sign Up
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSignUp} className={styles.container}>
          <div className={styles.conti}>
            <h3 className={styles.signin}>Sign Up</h3>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.input}
              placeholder="Username"
              required
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              type="email"
              placeholder="Email"
              required
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              type="password"
              placeholder="Password"
              required
            />
            <button className={styles.button} type="submit">
              Sign Up
            </button>
            <button
              type="button"
              onClick={handleLoginChange}
              className={styles.notResgitered}
            >
              Already Registered? Sign In
            </button>
          </div>
        </form>
      )}
      
    </main>
  );
}
