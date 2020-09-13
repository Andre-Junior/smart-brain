import React from 'react';

const Facerecognition = ({ imageUrl }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img src={imageUrl} alt='' width='500px' heigh='auto' />
            </div>
        </div>
    )
}

export default Facerecognition;