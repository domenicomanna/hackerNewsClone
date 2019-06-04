import React, { Component, Fragment } from 'react';
import StoryList from '../../components/StoryList/StoryList';
import Wrapper from '../../components/UI/Wrapper/Wrapper'
import Loader from '../../components/UI/Loader/Loader';

class StoryContainer extends Component {
    state = {
        stories: []
    }

    render() {
        return (
            <Fragment>
                <Loader />
                <Wrapper>
                    <StoryList/>
                </Wrapper>
            </Fragment>
        );
    }
}

export default StoryContainer;