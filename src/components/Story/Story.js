import React from 'react';
import styles from './Story.module.css';

const Story = () => {
    return (
        <li className = {styles.story}>
            <h2 className = {styles.storyTitle}>
                <a href="#" className={styles.storyLink}> Story title </a>
            </h2>
            <p className = {styles.storyDescription}>207 points by author</p>
        </li>
    );
}

export default Story;