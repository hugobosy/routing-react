import React from "react";
import '../styles/Article.css';

export const Article = props => {
    return (
        <article>
            <h3>{props.title}</h3>
            <p className="author">{props.author}</p>
            <p>{props.description}</p>
        </article>
    )
}