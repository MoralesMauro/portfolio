import { useState } from "react";
import "./app.css";
import Navbar from "./components/navbar/navbar";
import AboutMe from "./views/about-me/about-me";
import Home from "./views/home/home";
import Projects from "./views/projects/projects";
import { ThemeContext } from "./context/context";

const App = () => {
  const [theme, setTheme] = useState("theme-light");

const handleThemeChange = () => {
  if (theme === "theme-light") {
    setTheme("theme-dark");
  } else {
    setTheme("theme-light");
  } 
}

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Navbar handleThemeChange={handleThemeChange}/>
        <Home />
        <AboutMe />
        <Projects />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
