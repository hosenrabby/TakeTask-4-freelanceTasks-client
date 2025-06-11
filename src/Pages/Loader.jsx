import React from 'react';

const Loader = () => {
    return (
        <div className='w-full mx-auto min-h-[calc(100vh-250px)]'>
            <span className="loading loading-bars loading-xl ms-[50%] mt-[10%]"></span>
        </div>
    );
};

export default Loader;