const SearchNews = ({ newsList, search }) => {
    return (
        <div>
            <h2>"{search}"로 검색한 결과입니다.</h2>
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