import { format } from "date-fns";

const Video = ({ video }) => {

  let snippet = video.attributes.description.split(" ").slice(0, 19).join(" ");
  let date = format(Date.parse(video.attributes.date), "do MMMM y");

  return (
      <div className="article">
        <video src={"http://localhost:1337" + video.attributes.video.data.attributes.url} type="video/mp4" height="200px" width="400px" controls></video>
        <div className="article__text">
          <p className="article__text--headline">{video.attributes.title}</p>
          <p className="article__text--snippet">{snippet}...</p>
          <p className="article__text--date">{date}</p>
        </div>
      </div>
  );
};

export default Video;
