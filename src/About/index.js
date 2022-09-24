import React from "react";
import styles from './styles.module.css';
import background from "../imgs/home.jpg";
import about from "../imgs/about.jpg"

function About() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.about}>About Us</div>
        <p className={styles.textBox1}>Master Store is an online store that </p>
        <p className={styles.textBox2}>prides itself in finding amazing </p>
        <p className={styles.textBox3}>products and bringing them here for you.</p>
        <p className={styles.textBox4}>The bonus is that we are able to offer these </p>
        <p className={styles.textBox5}>tems at incredibly low prices.</p>
        <div>
          <img className={styles.about} src={about} alt={background}/>
        </div>
      </div>

    </>
  );
}

export default About;
