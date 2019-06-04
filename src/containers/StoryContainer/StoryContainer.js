import React, { Component } from 'react';
import StoryList from '../../components/StoryList/StoryList';
import Loader from '../../components/Loader/Loader';

class StoryContainer extends Component {
    state = {
        stories : []
    }
    
    render() {
        return (
            // <StoryList />
            <Loader/>
        );
    }
}

export default StoryContainer;