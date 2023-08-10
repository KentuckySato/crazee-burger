import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { theme } from '../../../theme';
import InputText from '../../shared/InputText';
import { BsChevronRight, BsPersonCircle } from "react-icons/bs"
import PrimayButton from '../../shared/PrimaryButton';

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

            <InputText
                leftIcon={<BsPersonCircle />}
                name="firstname"
                placeholder="Entrez votre prénom"
                value={inputValue}
                required={true}
                onChange={handleChange}
            />

            <PrimayButton
                label="Accéder à mon espace"
                type="submit"
                rightIcon={<BsChevronRight />}
            />
        </LoginFormStyled>
    )
}

const LoginFormStyled = styled.form`

    text-align: center;
    font-family: "Amatic SC", cursive;
    max-width: 500px;
    min-width: 400px;
    margin: 0 auto;
    padding: 2.5rem ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.round};

    h1, h2 {
        color: ${theme.colors.white};
        font-weight: ${theme.fonts.weights.bold};
    }

    h1 {
        font-size: ${theme.fonts.size.P5};
    }

    h2 {
        font-size: ${theme.fonts.size.P4};
        margin: 20px 10px 10px;
    }

    hr {
        border: 1.5px solid ${theme.colors.loginLine};
        margin-bottom: ${theme.gridUnit * 5}px;
    }

    button {
        width: 100%;
    }

    .icon {
        display: flex;
        position: relative;
        top: 2px;
        font-size: ${theme.fonts.size.SM};
        justify-content: center;
        align-items: center;
        margin-left: 10px;
    }
`;
