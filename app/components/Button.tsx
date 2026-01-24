import React from 'react';

const Button = () => {
    return (
        <div>
            <button className="btn absolute top-1 right-1 flex items-center justify-center input-button p-2 rounded-4xl text-white font-extrabold bg-pink-600 z-10 h-11 w-22 uppercase border-none cursor-pointer outline-none">
                ADD
            </button>
        </div>
    );
};

export default Button;