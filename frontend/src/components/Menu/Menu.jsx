import React from 'react';
import axios from 'axios';
import './styles.css';

export default function Menu({ id, nome, valor, description, onDelete }) {
    const handleDelete = async () => {
        if (window.confirm("Do you really want to delete this dish?")) {
            try {
                await axios.delete(`http://127.0.0.1:5001/api/menu/${id}`);
                onDelete({ id, nome, valor, description });
            } catch (error) {
                console.error('Error deleting dish:', error);
            }
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
