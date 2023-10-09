import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { theme } from '../../../theme';
import InputText from '../../shared/InputText';
import { BsChevronRight, BsPersonCircle } from "react-icons/bs"
import Button from '../../shared/Button';
import { authenticateUser } from '../../../api/user';
import Welcome from './Welcome';

export default function LoginForm() {
    // State
    const [username, setUsername] = useState('Kent');
    const navigate = useNavigate();

    // Effects
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!username) alert('Veuillez entrer votre prénom !');

        const userReceived = await authenticateUser(username);

        setUsername("");
        navigate(`order/${userReceived.username}`);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    return (
        <LoginFormStyled onSubmit={handleSubmit} className='loginForm'>
            <Welcome />
            <InputText
                leftIcon={<BsPersonCircle />}
                name="firstname"
                placeholder="Entrez votre prénom"
                value={username}
                required={true}
                onChange={handleChange}
                className='input-login'
            />

            <Button
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

    button {
        width: 100%;
    }

    .input-login {
        margin: 18px 0px;
    }
`;
