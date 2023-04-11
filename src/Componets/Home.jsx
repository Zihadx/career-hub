import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Section from './Section';
import Jobs from './Jobs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Section></Section>
            <Jobs></Jobs>
        </div>
    );
};

export default Home;