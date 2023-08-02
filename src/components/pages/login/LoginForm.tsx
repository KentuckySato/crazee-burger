import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

export default function LoginForm() {
    // State
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    // Effects
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputValue) return alert('Veuillez entrer votre prénom !');

        setInputValue('');
        navigate(`order/${inputValue}`);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return (
        <LoginFormStyled onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>

            <input
                onChange={handleChange}
                value={inputValue}
                type="text" id="firstname" name="firstname" placeholder="Entrez votre prénom..." required
            />
            <button type="submit">Accédez à votre espace</button>
        </LoginFormStyled>
    )
}

const LoginFormStyled = styled.form`
    text-align: center;
`;
