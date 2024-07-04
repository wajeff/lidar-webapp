import React from "react";
import styles from "./Hero.module.css";

export const Hero = ({ children}) =>{
  return (
    <section className={styles.container}>
      {children}
    </section>
  )
}