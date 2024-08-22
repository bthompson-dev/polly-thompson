import useFetch from "../hooks/useFetch";
import Article from "../components/Article";

const WorkGrid = ({ type }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:1337/api/${type}?populate=*`
  );

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
            return <Article article={result} key={result.id}/>;
          })}
    </div>
    </div>
    </>
  );
};

export default WorkGrid;
