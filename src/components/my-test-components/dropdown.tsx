'use client'
import { useState } from "react";
// import "../../../public/js/script";

import styles from './dropdown.module.css';

export const Dropdown = () => {

  const [services, setServices] = useState(false);

  return (
    <header className={styles.header}>
      <a href="#">
        <div>Logo Web</div>
      </a>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#"
          className={styles.dropMenu} data-manu
          onClick={() => {
            setServices(!services);
          }}
        >
          Services
          <ul className={`${styles.dropContainer}  ${services === true ? styles.active : null}`} id="menuul">
            <li className={`mb-3 ${styles.li}`}>Sales</li>
            <li className={`mb-3 ${styles.li}`}>Cars</li>
            <li className={`mb-3 ${styles.li}`}>Motors</li>
          </ul>
        </a>
        <a href="#">Contact us</a>
      </nav>

      <div className="auth">
        <a href="#">Sign in</a>
      </div>


    </header>
  )
}
