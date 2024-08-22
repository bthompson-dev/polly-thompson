import "../css/home.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:1337/api/about?populate=*"
  );

  return (
    <div id="homepage">
      <div className="background background-one"></div>
      <NavBar current="home" />
      <div className="background background-two"></div>
      <div className="about">
        <div className="about__content">
          <h2 className="section-header">About</h2>

          {error ? (
            `${error}`
          ) : loading ? (
            "Loading..."
          ) : (
            <img
              src={
                "http://localhost:1337" +
                data.data.attributes.profile.data.attributes.url
              }
              alt="Polly Thompson Profile"
            />
          )}

          <div className="about__content--text">
            {error
              ? `${error}`
              : loading
              ? "Loading..."
              : data.data.attributes.text}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
