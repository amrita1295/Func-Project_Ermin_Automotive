import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Healthy from './Healthy/Healthy';
import Nature from './Nature/Nature';
import Projects from './Projects/Projects';
import Advisor from './Advisor/Advisor';
import OurExperts from './OurExperts/OurExperts';
import Highlights from './Highlights/Highlights';
import National from './National/National';

const About = () => {
    return (
        <div>
            <AboutUs></AboutUs>
            <Healthy></Healthy>
            <Nature></Nature>
            <Projects></Projects>
            <National></National>
            <Highlights></Highlights>
            <OurExperts></OurExperts>
            <Advisor></Advisor>
        </div>
    );
};

export default About;