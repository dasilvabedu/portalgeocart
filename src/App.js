/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import MetadadoList from './components/MetadadoList';

const AppContainer = styled.div`
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
    width: 100vw;
    height: 100vh;
`;

const App = () => (
    <AppContainer>
        <MetadadoList />
    </AppContainer>
);

export default hot(module)(App);
