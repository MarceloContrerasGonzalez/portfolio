import Image from "next/image";
/* 
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
 */
export default function HomePage() {
  return (
    <main>
      
      <section id="home" className="flex justify-center items-center m-6 sm:m-12 md:m-16 lg:m-20 xl:m-40 bg-gray-900">
        <div className="flex flex-col sm:flex-row text-center sm:text-left p-6">
          <Image src="/images/padorulink.png" alt="icon" width={300} height={300} className="rounded-full mx-auto sm:mx-0" />
          <div className="mt-6 sm:mt-0 sm:ml-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-white">Marcelo Contreras Gonzalez</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-full sm:max-w-2xl">
              Desarrollador Full-Stack. Apasionado por la programación, el análisis de datos y el aprendizaje.
            </p>
            <div className="flex flex-col mt-10 sm:flex-row justify-center sm:justify-start gap-4">
              <a href="https://github.com/MarceloContrerasGonzalez" target="_blank" rel="noopener" className=" m-1 px-6 sm:px-12 py-2 bg-transparent text-white rounded-full hover:bg-gray-700 transition mt-2 border-gray-500 border">GitHub</a>
              <a href="https://www.linkedin.com/in/marcecontreras/" target="_blank" rel="noopener" className=" m-1 px-6 sm:px-12 py-2 bg-transparent text-white rounded-full hover:bg-gray-700 transition mt-2 border-gray-500 border">Linkedin</a>
              <a href="/cv/CV-marcelo-ignacio-contreras-gonzalez.pdf" target="_blank" rel="noreferrer" download className="m-1 px-6 sm:px-12 py-2 bg-transparent text-white rounded-full hover:bg-gray-700 transition mt-2 border-gray-500 border">Curriculum</a>
            </div>
          </div>
        </div>
      </section>
{/*
      <section id="about">
        <About />
      </section>
        
       <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />        
      </section>
       */}
    </main>
  );
}