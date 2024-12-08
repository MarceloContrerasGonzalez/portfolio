import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default function HomePage() {
  return (
    <main>
      <section id="about">
        <About />
      </section>
     {/*  <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />        
      </section> */}
    </main>
  );
}