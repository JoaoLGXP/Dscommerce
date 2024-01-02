/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import './styles.css';

type Props = {
    onSearch: Function;
}

export default function SearchBar({ onSearch }: Props) {

    const [text, setText] = useState("");

    function handleChange(event: any) {
        setText(event.target.value);
    }

    function handleResetClick() {
        setText("");
        onSearch(text);
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        onSearch(text);
    }

    return (
        <form className="dsc-search-bar" onSubmit={handleSubmit}>
            <button className="dsc-search-btn" type="submit">🔎︎</button>
            <input
                value={text}
                type="text"
                placeholder="Nome do produto"
                onChange={handleChange}
            />
            <button className="dsc-clear-btn" onClick={handleResetClick}>🗙</button>
        </form>
    );
}