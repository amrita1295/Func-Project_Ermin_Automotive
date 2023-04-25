import React from 'react';
import './Vision.css'
import { DefaultPlayer } from 'react-html5video';
import video from '../../../assets/customer-feedback.mp4'

const Vision = () => {
    return (
        <div>
            <h1 className="text-center vision-title">Our Vision</h1>

            <DefaultPlayer className="mx-auto mt-12 video" >
              <source
                src={video}
                type="video/mp4"
              />
            </DefaultPlayer>
        </div>
    );
};

export default Vision;