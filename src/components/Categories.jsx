import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <div>
            <input type="button" value="all"
                onClick={buttonClick} />
            <input type="button" value="business"
                onClick={buttonClick} />
            <input type="button" value="entertainment"
                onClick={buttonClick} />
            <input type="button" value="health"
                onClick={buttonClick} />
            <input type="button" value="science"
                onClick={buttonClick} />
            <input type="button" value="sports"
                onClick={buttonClick} />
            <input type="button" value="technology"
                onClick={buttonClick} />
        </div>
    );
};

export default Categories;