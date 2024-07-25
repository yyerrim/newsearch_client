const SearchNews = ({ newsList }) => {
    return (
        <div>
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