const Article = ({ article }) => {

console.log(article)

    return (
    <div className="article">
        <img src={"http://localhost:1337" + article.attributes.picture.data.attributes.url} alt="" className="article__img"/>
        <p className="article__headline">{article.attributes.headline}</p>
        
        </div>
  )
}

export default Article;