import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Departments from '../Departments/Departments';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Doctors></Doctors>
            <Departments></Departments>
        </div>
    );
};

export default Home;