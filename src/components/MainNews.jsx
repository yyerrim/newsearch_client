import { useEffect, useState } from "react";

const MainNews = ({ category }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const cate = category === "all" ? "" : `&category=${category}`;
      const apiKey = process.env.REACT_APP_NEWS_API_KEY;
      const url = `https://newsapi.org/v2/top-headlines?country=kr${cate}&apiKey=3edbe8fb44eb4142988957f180c08ef1`;
      const res = await fetch(url);
      const datas = await res.json();
      setData(datas.articles);
    };
    getNews();
  }, [category]);

  return (
    <div style={{ height: "100%", overflowY: "scroll" }}>
      {data.map((v, i) => {
        return (
          <div key={i}>
            <a href={v.url}>
              <h3>{v.title}</h3>
            </a>
            <div className="content" style={{ display: "flex" }}>
              {v.urlToImage && (
                <img
                  src={v.urlToImage}
                  style={{
                    width: "160px",
                    height: "100px",
                  }}
                />
              )}
              {v.description && <p>{v.description}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MainNews;
