"use client"
import React, {useState} from 'react';
import Button from "@/app/components/Button";


const Input = () => {
    const [state, setState] = useState('')
    return (
        <>
                <input className={"p-2 px-4 h-13 w-full pr-24 flex font-extrabold border-2 rounded-3xl focus:outline-none border-solid justify-center items-center bg-[#fce6ef] border-[#ffc5dd]"}
                       onChange={(event) => setState(event.target.value)} value={state}/>
        </>
    );
};

export default Input;