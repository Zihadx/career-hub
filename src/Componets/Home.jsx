import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Section from './Section';
import Jobs from './Jobs';
import JobDetails from './JobDetails';
import Chart from './Chart';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Section></Section>
            <Jobs></Jobs>
        </>
    );
};

export default Home;