import React from 'react';
import web from '../src/images/img2.png'

import Common from './Common';

const About = props => {
    return (
        <>
            <Common
                name='Welcome to About Page' imgsrc={web} visit='/contact' btname='Contact Now'
            />
        </>
    );
};


export default About;