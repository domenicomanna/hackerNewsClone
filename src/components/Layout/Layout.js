import React  from 'react';
import Toolbar from './Toolbar/Toolbar';
import styles from './Layout.module.css';

const Layout = (props) => {
    return ( 
        <div className = {styles.container}>
            <Toolbar/>
            {props.children}
        </div>
    );
}
 
export default Layout;