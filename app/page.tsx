"use client"
import Input from "@/app/components/Input";
import {use, useEffect, useState} from "react";
import Card from "@/app/components/Card";
import axios from "axios";
import Button from "@/app/components/Button";


// const mockData = [{name: "Kyiv", temp_c: -10, image_url: "https://cdn.weatherapi.com/weather/64x64/night/116.png"}]

export default function Home() {
    const [cards, setCards] = useState<any>([]);

    const [inputValue, setInputValue] = useState("");

    const handleData = async () => {
        try {
            const result = await axios.get(`https://api.weatherapi.com/v1/current.json?key=36136bbf697d457a8d5203401251412&q=${inputValue}`)

            // if (result.data) {
                setCards(prev => [
                    ...prev,
                    {name: result?.data?.location.name, temp_c: result.data?.current?.temp_c, image_url: result.data?.current?.condition?.icon}
                ]);
            // '}'

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=> {
        console.log(inputValue)
    },[inputValue])



    return (
        <>
            <div className={"flex-col align-center p-5"}>
                <div className={"relative flex w-full max-w-md"}>

                    <Input setInputValue={setInputValue} inputValue={inputValue}/>

                    <div className={"w-20px h-54px bg-none border-none p-0 outline-none"}>
                        <Button click={handleData}/>
                    </div>
                </div>
                <div className={"mt-10"}>
                    {cards && cards?.map((elem, index) => <Card key={index} name={elem.name} temperature={elem.temp_c}
                                                                image={elem.image_url}/>)}
                </div>
            </div>
        </>
    );
}
