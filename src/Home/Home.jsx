import Footer from "../footer/footer";
import Carrusel from "./Carrusel";
import "../App.css";
import Parrafo from "./Parrafo";

function Home() {
  return (
    <div className="div-home">
      <Carrusel />
      <div>
        <Parrafo />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
