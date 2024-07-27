import { useNavigate } from "react-router-dom";

const SearchNews = ({ newsList, search }) => {
  const navigate = useNavigate();

  const handleTitleClick = (url) => {
    navigate("/news", { state: { url, search } });
  };

  return (
    <div style={{ width: '98.5%', height: "100%", marginLeft: '1.5%' }}>
      <p style={{ margin: '2.3vh 0', fontSize: '3.3vmin', fontWeight: 'bold' }}>"{search}"(으)로 검색한 결과입니다.</p>
      <div style={{ width: '100%', height: "100%", overflowY: "scroll" }}>
        {newsList.map((v, i) => (
          <div key={i}>
            <p style={{ margin: '0' }} >
              <span
                onClick={() => handleTitleClick(v.originallink)}
                style={{ cursor: "pointer", fontSize: '2.2vmin', color: 'blue', fontWeight: 'bold', textDecoration: 'underline' }}
                dangerouslySetInnerHTML={{ __html: v.title }} />
            </p>
            <p
              style={{ marginRight: '1vw', fontSize: '1.8vmin' }}
              dangerouslySetInnerHTML={{ __html: v.description }} />
            <hr style={{ margin: '2.5vh 1vw 2.5vh 0' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchNews;
