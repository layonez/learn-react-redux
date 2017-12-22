import React from 'react';
import styles from '../styles/header.css';
import { Link } from 'react-router-dom';

/* let's use html5 semantics for page layout
https://www.w3schools.com/html/html5_semantic_elements.asp */
const Header = () =>
    <header className={styles.header}>
        <div className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <Link to="/">
                    <span className={styles.logo}/>
                </Link>
            </div>
            <nav>
                <Link to="/">Filterable Table</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    </header>;

export default Header;
