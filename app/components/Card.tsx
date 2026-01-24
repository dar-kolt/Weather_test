import React from 'react';

const Card = ({name, temperature, image}: { name: string, temperature: number, image: string }) => {
    return (
        <div className={"flex flex-col justify-between p-6 border-2 rounded-xl bg-gradient-to-br from-blue-100 to-blue-500 font-extrabold border-blue-900 min-w-[250px] max-w-[400px] min-h-[300px] shadow-xl"}>
            <h2 className="text-2xl tracking-wider text-blue-900">
                {name}
            </h2>
            <div className="flex items-center justify-center w-full my-15 gap-4">
                <div className={"text-6xl font-black text-white drop-shadow-lg"}>
                    {temperature}
                </div>
                {image && (
                    < img src={image} className={"w-24 h-24 object-contain drop-shadow-md"} />
                )}
            </div>
        </div>
    );
};

export default Card;