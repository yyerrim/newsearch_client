import { useState } from "react";

const SearchNews = () => {
    const [search, setSearch] = useState('');
    const [newsList, setNewsList] = useState([]);

    return (
        <div>
            <h1>키워드 검색</h1>
            <input type="text" placeholder="news 키워드를 입력하세요."
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }} />
            <button onClick={async () => {
                const url = `http://localhost:8080/naver/data?search=${search}`;
                const res = await fetch(url);
                const data = await res.json();
                setNewsList(data.items);
            }}>
                검색
            </button>
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