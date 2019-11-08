import React, { useState } from "react"
import styled from "styled-components";



const FormElement = styled.form`
 font-size: 25px;
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
`;

const Label = styled.label`
 background-color: white;
 border-radius: 10px;
 opacity: 20%;
 width: 70%;
 height: 80px;
 margin-bottom: 25px;
 font-size: 25px;
 text-align: center;
 animation: fadein 2s;
 display: flex;
 flex-direction: column;
`;

const TextArea = styled.input`
 background-color: white;
 opacity: 100%;
 width: 100%;
 height: 80px;
 font-size: 25px;
 text-align: left;
`;

const SmtBtn = styled.input`
 background-color: cyan;
 border-radius: 10px;
 opacity: 70%;
 width: 200px;
 height: 50px;
 margin-bottom: 50px;
 font-size: 20px;
`;

const Form = () => {
    const [text, setText] = useState("Enter a name to search");
    return (
        <FormElement>
            <Label>
                <TextArea type="text" defaultValue={text} />
            </Label>
            <SmtBtn type="submit" value="Submit" />
        </FormElement>
    );
}

export default Form;