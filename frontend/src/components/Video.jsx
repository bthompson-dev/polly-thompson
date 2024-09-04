import { format } from "date-fns";
import { useRef } from "react";

const Video = ({ video }) => {
  const modal = useRef(null);
  const modalVideo = useRef(null);

  let snippet = video.attributes.description.split(" ").slice(0, 19).join(" ");
  let date = format(Date.parse(video.attributes.date), "do MMMM y");

  const openModal = () => {
    modal.current.showModal();
  };

  const closeModal = () => {
    modal.current.close();
    modalVideo.current.pause();
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
      <dialog className="modal" ref={modal}>
        <p className="modal__title">{video.attributes.title}</p>
        <div className="modal__close" onClick={closeModal}>
          <img src="src/img/svg/close.svg" alt="Close Modal" />
        </div>
        <video
          className="modal__video"
          ref={modalVideo}
          src={
            "http://localhost:1337" + video.attributes.video.data.attributes.url
          }
          controls
        ></video>
        <p className="modal__description">{video.attributes.description}</p>
      </dialog>
    </>
  );
};

export default Video;
