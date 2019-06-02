import React from 'react';
import styles from './StoryList.module.css';
import Story from '../Story/Story';

const StoryList = () => {
    return ( 
        <ol className = {styles.stories}>
            <Story/>
            <Story/>
            <Story/>
        </ol>
    );
}
 
export default StoryList;