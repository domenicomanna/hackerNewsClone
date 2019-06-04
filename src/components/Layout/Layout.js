import React, { Fragment } from 'react';
import Toolbar from './Toolbar/Toolbar';
import Wrapper from '../UI/Wrapper/Wrapper';

const Layout = (props) => {
    return (
        <Fragment>
            <Wrapper>
                <Toolbar />
            </Wrapper>
            {props.children}
        </Fragment>
    );
}

export default Layout;