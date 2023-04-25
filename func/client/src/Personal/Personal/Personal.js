import React from 'react';
import PersonalHeader from './PersonalHeader/PersonalHeader';
import Rishi from './Rishi/Rishi';
import RishiSocial from './RishiSocial/RishiSocial';
import Vision from './Vision/Vision';
import MyBlogs from './MyBlogs/MyBlogs';
import WorkWith from './WorkWith/WorkWith';


const Personal = () => {
    return (
        <div>
            <PersonalHeader></PersonalHeader>
            <Rishi></Rishi>
            <RishiSocial></RishiSocial>
            <Vision></Vision>
            <MyBlogs></MyBlogs>
            <WorkWith></WorkWith>
        </div>
    );
};

export default Personal;