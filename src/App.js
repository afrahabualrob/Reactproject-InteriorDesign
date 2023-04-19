import "./App.css";
import Projects from "./components/Projects/Projects";
import Counters from "./components/Counters/Counters";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Footnote from "./components/Footnote/Footnote";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Works />
      <About />
      <Projects />
      <Counters />
      <Blogs />
      <Footer />
      <Footnote/>
    </>
  );
}

export default App;
