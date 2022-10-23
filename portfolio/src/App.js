import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import InfoWrapper from "./Pages/InfoWrapper";

function App() {
  return (
    <div className="App  bgGradient">
      <Navbar />
      <Banner />
      <About />
      <InfoWrapper />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
