import React from 'react';
import styles from './Story.module.css';

const Story = (props) => {
    return (
        <li className = {styles.story}>
            <h2 className = {styles.storyTitle}>
                <a href= {props.url} target = "_blank" className={styles.storyLink}> {props.title} </a>
            </h2>
            <p className = {styles.storyDescription}>{props.score} points by {props.author} </p>
        </li>
    );
}

export default Story;