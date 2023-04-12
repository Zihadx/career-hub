import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Section from './Section';
import Jobs from './Jobs';
import JobDetails from './JobDetails';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Section></Section>
            <Jobs></Jobs>
            {/* <JobDetails></JobDetails> */}
        </div>
    );
};

export default Home;