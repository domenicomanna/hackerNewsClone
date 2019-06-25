import React from 'react';
import styles from './StoryList.module.css';
import Story from '../Story/Story';

const StoryList = (props) => {
    return ( 
        <ol className = {styles.stories}>
            {transformStories(props.stories)}
        </ol>
    );
}

function transformStories(stories){
    return stories.map( (story) => {
        return (
            <Story key = {story.id}
            title = {story.title}
            url = {story.url}
            author = {story.by}
            score = {story.score}/>
        )
    })
    
}
 
export default StoryList;