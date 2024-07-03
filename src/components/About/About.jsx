import React from "react";
import styles from "./About.module.css";

export const About = () =>{
  return (
    
    <section className={styles.section}>
      <div className={styles.squareOne}/>


      <div className = {styles.titleContainer}>
        <h1 className = {styles.title}>What is LiDar?</h1>
        <p>
        Life Radar, or LiDar for short, is a life tracker web application. 

        <br></br>
        <br></br>

        LiDar combines a constantly updating visual data structure to help users see which areas of their lives are going well, and which areas need improvement.
        </p>
        <img className={styles.mathbook} src = "../../../assets/about/mathbook.png"></img>
      </div>
      
      
      <div className={styles.squareTwo}>

      </div>
      
    </section>
    
  )
}