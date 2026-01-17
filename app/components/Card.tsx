import React from 'react';

const Card = ({name, temperature, image}: { name: string, temperature: number, image: string }) => {
    return (
        <div className={"border-2 rounded-xl bg-indigo-500 tex-white font-extrabold p-2 border-red-300 min-w-[150px]"}>
            {name}
            {temperature}
            {image && < img src={image}/>}
        </div>
    );
};

export default Card;