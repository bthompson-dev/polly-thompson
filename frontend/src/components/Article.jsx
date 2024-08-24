import { format } from "date-fns";

const Article = ({ article }) => {
  console.log(article);

  let snippet = article.attributes.body.split(" ").slice(0, 19).join(" ");
  let date = format(Date.parse(article.attributes.date), "do MMMM y");

  return (
    <a href={article.attributes.link} target="_blank">
      <div className="article">
        <img
          src={
            "http://localhost:1337" +
            article.attributes.picture.data.attributes.url
          }
          alt=""
          className="article__img"
        />
        <div className="article__text">
          <p className="article__text--headline">{article.attributes.headline}</p>
          <p className="article__text--snippet">{snippet}...</p>
          <p className="article__text--date">{date}</p>
        </div>
      </div>
    </a>
  );
};

export default Article;
