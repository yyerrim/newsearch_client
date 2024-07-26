import { useNavigate } from 'react-router-dom';

const SearchNews = ({ newsList, search }) => {
    const navigate = useNavigate();

    const handleTitleClick = (url) => {
        navigate('/news', { state: { url, search } });
    };

    return (
        <div style={{ height: '100%', overflowY: 'scroll' }}>
            <h2 style={{ margin: '0' }}>"{search}"로 검색한 결과입니다.</h2>
            {
                newsList.map((v, i) => (
                    <div key={i}>
                        <h3
                            onClick={() => handleTitleClick(v.originallink)}
                            style={{ cursor: 'pointer' }}
                            dangerouslySetInnerHTML={{ __html: v.title }}
                        />
                        <p dangerouslySetInnerHTML={{ __html: v.description }} />
                    </div>
                ))
            }
        </div>
    );
};

export default SearchNews;