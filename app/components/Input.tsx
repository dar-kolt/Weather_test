"use client"
import React, {useState} from 'react';
import Button from "@/app/components/Button";


const Input = () => {
    const [state, setState] = useState('')
    return (
        <>
            <div>
                <input className={"p-2 px-4 font-extrabold border-2 bg-blue-300 rounded-xl border-blue-700"}
                       onChange={(event) => setState(event.target.value)} value={state}/>
                <Button/>
            </div>

        </>
    );
};

export default Input;