import React from 'react';
import web from '../src/images/img2.png'
import Common from './Common';

const home = props => {
    return (
        <>
            <Common
                name='Grow Your Buisness' imgsrc={web} visit='/service' btname='Get Started'
            />
        </>
    );
};


export default home;