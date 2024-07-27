import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
            <button onClick={handleBack} style={{ width: '20%', height: '5%' }}>
                Back
            </button>
            <iframe
                src={url}
                style={{ width: '100%', height: '95%', border: 'none' }}
                title="News Article"
            />
        </div>
    );
};

export default NewsPage;