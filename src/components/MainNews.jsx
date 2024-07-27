import { useEffect, useState } from "react";

const MainNews = ({ category }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const cate = category === "all" ? "" : `&category=${category}`;
      const apiKey = process.env.REACT_APP_NEWS_API_KEY;
      // const url = `https://newsapi.org/v2/top-headlines?country=kr${cate}&apiKey=&{apiKey}`;
      // const url = `https://newsapi.org/v2/top-headlines?country=kr${cate}&apiKey=3edbe8fb44eb4142988957f180c08ef1`;
      const url = `https://newsapi.org/v2/top-headlines?country=kr${cate}&apiKey=4d04ef5559d647efa5e26f934f7db879`;
      const res = await fetch(url);
      const datas = await res.json();
      setData(datas.articles);
    };
    getNews();
  }, [category]);

  return (
    <div style={{ width: '100%', height: "100%", overflowY: "scroll" }}>
      <div style={{ width: '97%', height: "98.5%", margin: '1.5% 1.5% 0 1.5%' }}>
        {data.map((v, i) => {
          return (
            <div key={i}>
              <p style={{ margin: '2.5vh 0 0 0', fontSize: '2.2vmin', fontWeight: 'bold' }}><a href={v.url} target="_blank">{v.title}</a></p>
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
    </div>
  );
};
export default MainNews;
