import { Navbar, Hero, About, Tech, Experience, Education, Works, Contact } from "./components";

const App = () => {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text-primary)" }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tech />
        <Experience />
        <Education />
        <Works />
        <Contact />
      </main>
    </div>
  );
};

export default App;
