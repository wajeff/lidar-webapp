import React from "react";
import styles from "./Animation.module.css";

export const Animation = () =>{
  return (
    <section className={styles.animationContainer}>
      <img 
        className = {styles.animation} 
        src="../../../assets/animation/lidar.gif"
      />
    </section>
      
    
  )
}