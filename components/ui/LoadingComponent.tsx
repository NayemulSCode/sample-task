import React from 'react';

const LoadingComponent: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center">
                <div className="loader"></div>
                <p className="text-gray-600 mt-4">Loading...</p>
            </div>
        </div>
    );
};

export default LoadingComponent;