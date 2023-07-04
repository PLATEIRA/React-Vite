import React from "react";
import styles from "./header.modules.css";
import logo from "../assets/icons/logo.svg";

export function Header(){
    return (
        <header className={styles.header}>
          <img src={logo} alt="logotipo" />
          <strong>header</strong>
        </header>
    );
}