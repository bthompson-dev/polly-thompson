import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import WorkGrid from "../components/WorkGrid";
import "../css/work.css";

export default function Work() {
  return (
    <div id="work">
      <div className="background background-one"></div>
      <NavBar current="work" />
      <WorkGrid type="articles" />
      <Footer />
    </div>
  );
}
