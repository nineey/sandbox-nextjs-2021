import React from "react";
import styles from "./Button.module.css";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">This is my header</h1>
      <button className={styles.error_btn}>Button</button>
    </>
  );
}
