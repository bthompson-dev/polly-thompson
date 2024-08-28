import { format } from "date-fns";

const Video = ({ video }) => {
  console.log(video);

  let snippet = video.attributes.description.split(" ").slice(0, 19).join(" ");
  let date = format(Date.parse(video.attributes.date), "do MMMM y");

  let modal = document.querySelector(`#modal${video.id}`);
  let modalVideo = document.querySelector(`#video${video.id}`);

  const openModal = () => { 
    modal.showModal();
  }
  
    const closeModal = () => {
    modal.close();
    modalVideo.pause();
  };

  return (
    <>
      <div className="article" onClick={openModal}>
        {video.attributes.thumbnail.data !== null && (
          <img
            src={
              "http://localhost:1337" +
              video.attributes.thumbnail.data.attributes.url
            }
            alt=""
            className="article__img"
          />
        )}
        <div className="article__text">
          <p className="article__text--headline">{video.attributes.title}</p>
          <p className="article__text--snippet">{snippet}...</p>
          <p className="article__text--date">{date}</p>
        </div>
      </div>
      <dialog className="modal" id={"modal" + video.id}>
        <p className="modal__title">{video.attributes.title}</p>
        <div className="modal__close" onClick={closeModal}>
          <img src="src/img/svg/close.svg" alt="Close Modal" />
        </div>
        <video
          className="modal__video"
          id={"video" + video.id}
          src={
            "http://localhost:1337" + video.attributes.video.data.attributes.url
          }
          controls
        ></video>
      </dialog>
    </>
  );
};

export default Video;
