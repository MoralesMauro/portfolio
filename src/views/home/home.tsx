import "./home.css";

const Home = () => {
  return (
    <section id="home" className="home-container">
      <div className="wrapper home-wrapper">
        <main className="home-main">
          <h1>Hi, I am Mauro</h1>
          <h2>Full-Stack Java developer</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            aperiam repellendus voluptas debitis unde commodi ea quasi corrupti
            quo enim assumenda deserunt, similique animi quae iste illo
            delectus, veniam et.
          </p>
          <div className="home-link-wrapper">
          <a href="https://github.com/MoralesMauro" target="_blank"><img src="/src/assets/github.svg"/></a>
          <a href="https://www.linkedin.com/in/mauro-alejandro-morales-293b38270/" target="_blank"><img src="src/assets/linkedin.svg"/></a>
          <a href="mailto:mauroale2501@gmail.com" target="_blank"><img src="src/assets/gmail.svg"/></a>
          </div>
          <a href="/src/assets/CV_Mauro-s1.pdf" target="_blank" className="home-button__resume">
            Resume
          </a>
        </main>
        <aside>
          <img src="/src/assets/web-background.svg" />
        </aside>
      </div>
    </section>
  );
};

export default Home;
