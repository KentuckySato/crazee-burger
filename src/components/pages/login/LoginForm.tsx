import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { theme } from '../../../theme';
import Input from '../../shared/Input';
import { BsPersonCircle } from "react-icons/bs"

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
        <LoginFormStyled onSubmit={handleSubmit} className='loginForm'>
            <h1>Bienvenue chez nous !</h1>
            <hr />
            <h2>Connectez-vous</h2>

            <Input
                icon={<BsPersonCircle />}
                name="firstname"
                placeholder="Entrez votre prénom"
                type="text"
                value={inputValue}
                required={true}
                onChange={handleChange}
            />

            <button type="submit">Accédez à votre espace</button>
        </LoginFormStyled>
    )
}

const LoginFormStyled = styled.form`

    h1, h2 {
        color: ${theme.colors.white};
        text-align: center;
        font-family: "Amatic SC", cursive;
        font-size: ${theme.fonts.P5};
        font-style: normal;
        font-weight: ${theme.weights.bold};
        line-height: 61px; /* 127.083% */
    }

    hr {
        border: 1.5px solid ${theme.colors.primary};
    }

    h2 {
        font-size: ${theme.fonts.P4};
    }
`;
