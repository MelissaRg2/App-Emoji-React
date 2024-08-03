import React from 'react';
import { useState, useCallback } from "react";

const Form = ({ setValueEmoji, toggleDarkMode, darkMode }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleSearch = useCallback(e => {
        e.preventDefault();
        const trimmedValue = value.trim();

        if (trimmedValue === '') {
            setError('El campo no puede estar vacío.');
            setTimeout(() => setError(''), 3000);
            return;
        }

        if (trimmedValue.length < 2) {
            setError('El término de búsqueda debe tener al menos 2 caracteres.');
            setTimeout(() => setError(''), 3000);
            return;
        }

        setValueEmoji(trimmedValue);
        setValue(''); // Limpia el campo de entrada
    }, [value, setValueEmoji]);

    const allEmojis = () => {
        setValueEmoji('');
        setValue(''); // Limpia el campo de entrada
    }

    return (
        <section className={`form ${darkMode ? "dark-mode" : ""}`}>
            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    placeholder="Busca emojis por palabra ..." 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    aria-label="Busca emojis por palabra"
                />
                <button
                    type="button"
                    onClick={allEmojis}
                >
                    Todos
                </button>
                <div className="toggle-box" onClick={toggleDarkMode}>
                    <div className="toggle-circle"></div>
                </div>
            </form>
            { error && <p className="error" aria-live="assertive">{error}</p> }
        </section>
    );
}

export default Form;
