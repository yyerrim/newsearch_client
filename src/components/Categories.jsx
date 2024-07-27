import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";

const Categories = ({ onCategoryChange }) => {
    const [category, setCategory] = useState('all');
    const navigate = useNavigate();

    const buttonClick = (e) => {
        const value = e.target.value;
        setCategory(value);
        onCategoryChange(value);
        navigate('/');
    };

    return (
        <div className="menu_categories">
            <button value='all' onClick={buttonClick}>all</button>
            <button value='business' onClick={buttonClick}>business</button>
            <button value='entertainment' onClick={buttonClick}>entertainment</button>
            <button value='health' onClick={buttonClick}>health</button>
            <button value='science' onClick={buttonClick}>science</button>
            <button value='sports' onClick={buttonClick}>sports</button>
            <button value='technology' onClick={buttonClick}>technology</button>
        </div>
    );
};

export default Categories;