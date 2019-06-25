import React, { Component, Fragment } from 'react';
import StoryList from '../../components/StoryList/StoryList';
import Wrapper from '../../components/UI/Wrapper/Wrapper'
import Loader from '../../components/UI/Loader/Loader';
import HackerNewsClient from '../../hackerNewsClient';

class StoryContainer extends Component {
    state = {
        stories: [],
        error: false
    }
    hackerNewsClient = new HackerNewsClient();

    async componentDidMount() {
        try {
            let storyIDs = await this.hackerNewsClient.getTopStories();
            let stories = [];
    
            for (let i = 0; i < 30; i++){
                let story = await this.hackerNewsClient.getItem(storyIDs[i]);
                stories.push(story);
            }
            this.setState({ stories: stories });
        }

        catch (error) {
            this.setState({ error: true });
            console.log(error);
        }
    }

    render() {

        let storiesComponent = (
            <Wrapper>
                <StoryList stories={this.state.stories} />
            </Wrapper>
        );

        if (this.state.stories.length === 0) {
            storiesComponent = <Loader />
        }

        if (this.state.error){
            storiesComponent = <p>HUGE ERROR</p>;
        }

        return (
            storiesComponent
        );
    }
}

export default StoryContainer;