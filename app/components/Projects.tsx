import ProjectCard from "./ProjectCard";

//generamos una constante con un array de objetos que contienen la información de los proyectos que queremos mostrar
const projects = [
    {
        title: "Proyecto 1",
        description: "Este es el proyecto 1",
        href: "https://github.com",
        image: "/images/next.svg",
    },
    {
        title: "Proyecto 2",
        description: "Este es el proyecto 2",
        href: "https://github.com",
        image: "/images/next.svg",
    },
    {
        title: "Proyecto 3",
        description: "Este es el proyecto 3",
        href: "https://github.com",
        image: "/images/next.svg",
    },
];

export default function Projects() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {projects.map((project) => (
                <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    href={project.href}
                    image={project.image}
                />
            ))}
        </div>
    );
}