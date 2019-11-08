import React, { useState, useEffect, } from 'react';
import Axios from 'axios';
import StarWarsChar from "./StarWarsChar";
import styled from "styled-components";

const Container = styled.div`
 font-size: 25px;
 width: 100%;
 display: flex;
 flex-direction: column;

 align-items: center;

 
`;
export default function StarWars() {

    const [cards, setCards] = useState([0]);



    useEffect(() => {
        Axios.get(`https://swapi.co/api/people/`).then(response => {
            console.log(response.data)
            setCards(response.data.results)
        })
            .catch(error => {
                console.log("data not returned, error")
            })
    }, [])
    return (
        <Container>
            {cards.map((character, index) => {
                return <StarWarsChar key={index} Name={character.name} Height={character.height} Mass={character.mass} />;
            }
            )}

        </Container>
    )
}