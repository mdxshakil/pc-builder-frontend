import React from 'react';

const Spinner = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center '>
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    );
};

export default Spinner;