import React, { useState, useEffect, } from 'react';
import Axios from 'axios';


export default function StarWars() {

    const [cards, setCards] = useState([0]);



    useEffect(() => {
        Axios.get(`https://swapi.co/api/people/`).then(response => {
            console.log(response.data)
        })
            .catch(error => {
                console.log("data not returned, error")
            })
    }, [])
    return (
        <div>

        </div>
    )
}