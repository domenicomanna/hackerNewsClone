import React from 'react';
import styles from './StoryList.module.css';
import Story from '../Story/Story';

const StoryList = () => {
    return ( 
        <ol className = {styles.stories}>
            <Story title = 'Story title' score = '12' author = 'An author' />
            <Story title = 'Story title' score = '12' author = 'An author' />
            <Story title = 'Story title' score = '12' author = 'An author' />
        </ol>
    );
}
 
export default StoryList;