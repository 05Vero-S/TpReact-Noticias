

const ItemNoticias = ({item}) => {
    const websiteUrl= item.url
    const website= websiteUrl.split('http://').pop().split('/')[0]

    const date = item.publishedAt
    const formatDate = date.replace('T', '')
    const formatTime = formatDate.replace('Z', '')

    return (
        <a href="" className="article">
            <div className="article-image">
                <img src={item.urlToImage} alt={item.title} />

            </div>
            <div className="article-content">
                <div className="article-source">
                    
                    <span>{item.source.name} </span>

                </div>
                <div className="article-title">
                    <h2>{item.title} </h2>

                </div>
                <p className="article-description">
                    {item.description}
                </p>
                <div className="article-details">
                    <small><b>Publicado en: </b>{formatTime} </small>

                </div>

            </div>

        </a>
        
    );
};

export default ItemNoticias;