import { useState } from "react";

const Categories = ({ onCategoryChange }) => {
    const [category, setCategory] = useState('');

    const buttonClick = (e) => {
        const value = e.target.value;
        setCategory(value);
        onCategoryChange(value);
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