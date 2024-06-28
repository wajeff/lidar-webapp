import React from "react";
import styles from "./About.module.css";

export const About = () =>{
  return (
  
    <section className={styles.section}>
      <div className={styles.squareOne}>
      </div>
      <div className = {styles.titleContainer}>
        <h1 className = {styles.title}>What is LiDar?</h1>
        <img className={styles.mathbook} src = "../../../assets/about/mathbook.png"></img>
      </div>
      
      
      <div className={styles.squareTwo}>

      </div>
      
    </section>
    
  )
}