import React, {useState} from "react";
import '../styles/ContactPage.css';

export const ContactPage = () => {

    const [text, setText] = useState('');

    const handleValue = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setText('');
    }
    return (
        <div className="contact">
            <form onSubmit={handleSubmit}>
                <h1>Napisz do nas!</h1>
                <textarea value={text} onChange={handleValue} placeholder="Wpisz tekst..."></textarea>
                <button>Wyślij</button>
            </form>
        </div>
    )
}