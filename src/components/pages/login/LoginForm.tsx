import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function LoginForm() {
    // State
    const [inputValue, setInputValue] = useState('');

    // Effects
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputValue) return alert('Veuillez entrer votre prénom !');
        setInputValue('');
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>

            <input
                onChange={handleChange}
                value={inputValue}
                type="text" id="firstname" name="firstname" placeholder="Entrez votre prénom..." required
            />
            <button type="submit">Accédez à votre espace</button>
            <Link to="/order">Vers OrderPage</Link>
        </form>
    )
}
