import { useEffect, useState } from "react";
import Categories from './Categories';

const MainNews = () => {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState('all');

    useEffect(() => {
        const getNews = async () => {
            const cate = category === 'all' ? '' : `&category=${category}`;
            const apiKey = process.env.REACT_APP_NEWS_API_KEY;
            const url = `https://newsapi.org/v2/top-headlines?country=kr${cate}&apiKey=${apiKey}`;
            const res = await fetch(url);
            const datas = await res.json();
            setData(datas.articles);
        };
        getNews();
    }, [category]);

    return (
        <div>
            <Categories onCategoryChange={setCategory} />
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