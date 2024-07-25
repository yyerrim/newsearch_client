import { useState } from "react";
import Search from "./Search";

const SearchNews = () => {
    const [newsList, setNewsList] = useState([]);

    const fetchNews = async (search) => {
        const url = `http://localhost:8080/naver/data?search=${search}`;
        const res = await fetch(url);
        const data = await res.json();
        setNewsList(data.items);
    };

    return (
        <div>
            <Search onSearch={fetchNews} />
            <h2>검색 결과</h2>
            {
                newsList.map((v, i) => {
                    return (
                        <div key={i}>
                            <a href={v.originallink}><h3 dangerouslySetInnerHTML={{ __html: v.title }}></h3></a>
                            <p dangerouslySetInnerHTML={{ __html: v.description }}></p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default SearchNews;