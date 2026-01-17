"use client"
import Input from "@/app/components/Input";
import {useEffect, useState} from "react";
import Card from "@/app/components/Card";
import axios from "axios";


const mockData = [{name: "Kyiv", temp_c: -10, image_url: "https://cdn.weatherapi.com/weather/64x64/night/116.png"}]

export default function Home() {
    const [cards, setCards] = useState([]);

    const handleData = async () => {
        const result = await axios.get('https://api.weatherapi.com/v1/current.json?key=36136bbf697d457a8d5203401251412&q=London')
        console.log(result.data)
    }

    useEffect(() => {
        handleData()
    })

    return (
        <>
            <div className={"w-full h-full flex flex-col align-center p-5 bg-red"}>
                <div className={"flex"}>
                    <Input/>
                </div>
                <div className={"mt-10"}>
                    {mockData.map((elem, index) => <Card key={index} name={elem.name} temperature={elem.temp_c}
                                                         image={elem.image_url}/>)}
                </div>
            </div>
        </>
    );
}
