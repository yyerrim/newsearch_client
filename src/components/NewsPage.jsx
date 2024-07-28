import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./NewsPage.css";

const NewsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { url, search } = location.state || {};

    const handleBack = () => {
        navigate('/search', { state: { search } }); // 검색어를 상태로 전달하여 정확한 페이지로 이동
    };

    if (!url) {
        return <div>No URL provided</div>;
    }

    return (
        <div className="newsPage">
            <button onClick={handleBack}>
                ◀︎ Back
            </button>
            <iframe src={url} title="News Article" />
        </div>
    );
};

export default NewsPage;