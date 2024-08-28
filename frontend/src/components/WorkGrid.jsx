import useFetch from "../hooks/useFetch";
import Article from "../components/Article";
import Video from "../components/Video";

const WorkGrid = ({ type }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:1337/api/${type}?populate=*`
  );

  console.log(data)

  return (
    <>
    <div className="work-grid">
    <h2 className="section-header">{type}</h2>
    <div className="work-grid__grid">
      {error
        ? `${error}`
        : loading
        ? "Loading..."
        : data.data.map((result) => {

          if (type == "articles") {
            return <Article article={result} key={result.id}/>;
          } else if (type == "videos") {
            return <Video video={result} key={result.id}/>
          }

          })}
    </div>
    </div>
    </>
  );
};

export default WorkGrid;
