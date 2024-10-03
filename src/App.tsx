import "./app.css";
import Navbar from "./components/navbar/navbar";
import AboutMe from "./views/about-me/about-me";
import Home from "./views/home/home";
import Projects from "./views/projects/projects";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
    </div>
  );
};

export default App;
