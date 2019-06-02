import React from 'react';
import Layout from './components/Layout/Layout';
import Story from './components/Story/Story';

function App() {
    return (
        <Layout>
            <ol>
                <Story />
                <Story />
                <Story />
            </ol>
        </Layout>
    );
}

export default App;
