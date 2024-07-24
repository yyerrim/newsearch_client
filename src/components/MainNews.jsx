import { useEffect, useState } from "react";

const MainNews = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            const category = `&category=entertainment`;
            const url = `https://newsapi.org/v2/top-headlines?country=kr${category}&apiKey=3edbe8fb44eb4142988957f180c08ef1`;
            const res = await fetch(url);
            const datas = await res.json();
            setData(datas.articles);
        };
        getNews();
    }, []);

    return (
        <div>
            {
                data.map((v, i) => {
                    return (
                        <div key={i}>
                            <a href={v.url}><h3>{v.title}</h3></a>
                            <p>{v.description}</p>
                            <img src={v.urlToImage} style={
                                {
                                    width: '160px',
                                    height: '100px',
                                }
                            }></img>
                        </div>
    )
})
            }
        </div >
    );
};

export default MainNews;