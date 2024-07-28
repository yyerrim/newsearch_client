import { useLocation, useNavigate } from "react-router-dom";
import "./Categories.css";

const Categories = ({ category, onCategoryChange }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const buttonClick = (e) => {
        const value = e.target.value;
        onCategoryChange(value);
        navigate('/');
    };

    const isSearchPage = location.pathname === '/search';
    const isNewsPage = location.pathname === '/news';

    return (
        <div className="menu_categories">
            <button value='all' onClick={buttonClick}
                className={isSearchPage || isNewsPage || category === "all" ? "selected" : ""}>all</button>
            <button value='business' onClick={buttonClick}
                className={isSearchPage || isNewsPage || category === "business" ? "selected" : ""}>business</button>
            <button value='entertainment' onClick={buttonClick}
                className={isSearchPage || isNewsPage || category === "entertainment" ? "selected" : ""}>entertainment</button>
            <button value='health' onClick={buttonClick}
                className={isSearchPage || isNewsPage || category === "health" ? "selected" : ""}>health</button>
            <button value='science' onClick={buttonClick}
                className={isSearchPage || isNewsPage || category === "science" ? "selected" : ""}>science</button>
            <button value='sports' onClick={buttonClick}
                className={isSearchPage || isNewsPage || category === "sports" ? "selected" : ""}>sports</button>
            <button value='technology' onClick={buttonClick}
                className={isSearchPage || isNewsPage || category === "technology" ? "selected" : ""}>technology</button>
        </div>
    );
};

export default Categories;