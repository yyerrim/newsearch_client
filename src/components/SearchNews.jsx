import { useRef, useState } from "react";

const SearchNews = () => {
    const search = useRef();
    const [newsList, setNewsList] = useState([]);

    const getNews = async (query) => {
        // const url = `https://openapi.naver.com/v1/search/news?query=${encodeURIComponent(query)}&display=20`;
        const url = `http://localhost:8080/naver/data`;
        const options = {
            method: 'GET',
            headers: {
                'X-Naver-Client-Id': 'IvgTQdgxlCWCOq3mEuAn',
                'X-Naver-Client-Secret': 'rgmMSy8YCx'
            }
        };
        const res = await fetch(url, options);
        const data = await res.json();
        return data;
    };

    const handleClick = async () => {
        const query = search.current.value;
        if (query) {
            const data = await getNews(query);
            setNewsList(data.items);
        } else {
            alert("검색어를 입력하세요.");
        }
    };

    return (
        <div>
            <h1>키워드 검색</h1>
            <input type="text" placeholder="news 키워드를 입력하세요."
                ref={search} />
            <button onClick={handleClick}>검색</button>
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