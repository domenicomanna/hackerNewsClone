import React from 'react';
import styles from './Toolbar.module.css';


const Toolbar = () => {
    return ( 
        <header className = {styles.header}>
            <h2 className = {styles.brand}> Hacker News </h2>
        </header>
    );
}

export default Toolbar;