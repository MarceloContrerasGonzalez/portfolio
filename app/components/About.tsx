import SkillCard from "./SkillCard";

const skills = [
    { name: "HTML", icon: "/images/html.svg" },
    { name: "CSS", icon: "/images/css.svg" },
    { name: "JavaScript", icon: "/images/javascript.svg" },
    { name: "Tailwind", icon: "/images/tailwind.svg" },
    { name: "React", icon: "/images/react.svg" },
    { name: "Next", icon: "/images/nextjs.svg" },
    { name: "Python", icon: "/images/python.svg" },
    { name: "Django", icon: "/images/django.svg" },
    { name: "Typescript", icon: "/images/typescript.svg" },
    
  ];
export default function About(){
    return(
        <div className="flex flex-wrap px-6 lg:px-10 py-16 rounded-md ring-1">
            <div className="w-full lg:w-1/2 lg:pl-4 lg:pr-12">
                <h1 className="text-4xl text-center font-bold mb-8">Sobre mí</h1>
                <p className="max-w-3xl mb-5">
                    Soy un desarrollador, apasionado por la tecnología y el aprendizaje continuo. Durante mi formación y experiencia profesional, he adquirido sólidos conocimientos en desarrollo web, gestión de proyectos y análisis de datos.
                </p>
                <p className="max-w-3xl mb-5">
                    Me especializo en crear soluciones eficientes y adaptables, combinando habilidades técnicas con una perspectiva analítica para abordar desafíos complejos.
                </p>
                <p className="max-w-3xl">
                    Mi objetivo es seguir creciendo como profesional, contribuyendo con mi experiencia a proyectos innovadores y de impacto.
                </p>
            </div>
            
            <div className="w-full lg:w-1/2 lg:pl-4 lg:pr-12">
                <h1 className="text-4xl text-center font-bold">Habilidades</h1>
                
                <div className="mt-8 grid grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-6 group/list">
                    {skills.map((skill) => (
                    <SkillCard key={skill.name} title={skill.name} icon={skill.icon}/>
                    ))}
                </div>
                
            </div>
        </div>
    );
}