import React from 'react';
import './styles.css';

export default function Menu({ nome, valor, description, onDelete }) {
    const handleDelete = () => {
        if (window.confirm("Do you really want to delete this dish?")) {
            onDelete({ nome, valor, description });
        }
    };

    return (
        <div className="menu-item">
            <button 
                className="menu-item__delete-btn" 
                onClick={handleDelete}
            >
                x
            </button>
            <h2 className="menu-item__name">{nome}</h2>
            <p className="menu-item__price">R${valor}</p>
            <p className="menu-item__description">{description}</p>
        </div>
    );
}
