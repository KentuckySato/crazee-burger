import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { theme } from '../../../theme';
import Input from '../../shared/Input';
import { BsChevronRight, BsPersonCircle } from "react-icons/bs"
import Button from '../../shared/Button';

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
                leftIcon={<BsPersonCircle />}
                name="firstname"
                placeholder="Entrez votre prénom"
                type="text"
                value={inputValue}
                required={true}
                onChange={handleChange}
            />

            <Button
                label="Accédez à votre espace"
                type="submit"
                rightIcon={<BsChevronRight />}
            />
        </LoginFormStyled>
    )
}

const LoginFormStyled = styled.form`

    text-align: center;
    font-family: "Amatic SC", cursive;

    h1, h2 {
        color: ${theme.colors.white};
        font-weight: ${theme.weights.bold};
    }

    h1 {
        font-size: ${theme.fonts.P5};
    }

    h2 {
        font-size: ${theme.fonts.P4};
        margin: 20px 10px 10px;
    }

    hr {
        border: 1.5px solid ${theme.colors.primary};
        margin-bottom: 40px;
    }

    button {
        width: 100%;
    }
`;
