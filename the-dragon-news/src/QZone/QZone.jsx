import React from 'react';
import qzone1 from '../assets/qZone1.png';
import qzone2 from '../assets/qZone2.png';
import qzone3 from '../assets/qZone3.png';

const QZone = () => {
    return (
        <div className='bg-light my-4 py-1 rounded'>
            <h4 className='ps-2 text-secondary'>Q-Zone</h4>
            <div>
                <img src={qzone1} alt="thumbnail" />
                <img src={qzone2} alt="thumbnail" />
                <img src={qzone3} alt="thumbnail" />
            </div>
        </div>
    );
};

export default QZone;