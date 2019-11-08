import React from "react";
import styled from "styled-components";


const CharCard = styled.section`
 background-color: white;
 opacity: 70%;
 width: 70%;
 height: 120px;
margin-bottom: 25px;
 box-shadow: 5px 10px #888888
 font-size: 25px;
 text-align: center;
 animation: fadein 2s;
 display: flex;
 flex-direction: column;
`;

const Name = styled.h3``;

const Info = styled.div`
display: flex; 
flex: row;
justify-content: space-around;
margin-top: -40px;
transition: ease-in;
`;

const StarwarsChar = props => {
    return (
        <CharCard>
            <Name> {props.Name + "  "}</Name>
            <Info>
                <p>Height: {props.Height + "  "}</p>
                <p>Mass: {props.Mass + "  "}</p>
            </Info>
        </CharCard>
    )
};

export default StarwarsChar;