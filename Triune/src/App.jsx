import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Client from "./components/Client.jsx";
import WhyChooseTruine from "./components/WhyChooseTruine.jsx";
import TransformCareer from "./components/TransformCareer.jsx";
import Footer from "./components/Footer.js";
import Testimonials from "./components/Testimonials.jsx";
import OurServices from "./components/OurServices.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Client />
      <Testimonials/>
      <OurServices />
      <WhyChooseTruine />
      <TransformCareer />
      <Footer/>
    </div>
  );
}

export default App;
