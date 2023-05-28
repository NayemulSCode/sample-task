import React from 'react';

interface ErrorComponentProps {
    message: any;
    status: number;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message,status }) => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center">
                <p className="text-red-500 text-lg font-semibold mb-4">{status}</p>
                <p className="text-gray-600">{JSON.stringify(message)}</p>
            </div>
        </div> 
    );
};

export default ErrorComponent;
