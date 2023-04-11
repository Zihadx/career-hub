import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Section from './Section';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Section></Section>
        </div>
    );
};

export default Home;