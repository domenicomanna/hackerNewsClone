import React from 'react';
import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
    return ( 
        <p className = {styles.errorMessage}>
            There was an error retrieving the stories. Please try again later.
        </p>
     );
}
 
export default ErrorMessage;