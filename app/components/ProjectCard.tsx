import Image from "next/image";


type ProjectCardProps = {
    title: string;
    description: string;
    href: string;
    image: string;
}

export default function ProjectCard({ title, description, href, image }: ProjectCardProps) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
          <div className="relative w-full h-16">
            <Image
              src={image}
              alt={title}
              layout="fill" // Esto hace que la imagen ocupe todo el contenedor
              objectFit="cover" // La imagen se ajusta al contenedor sin deformarse
              className="rounded-t-lg"
            />
          </div>
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl text-gray-900 dark:text-white">{title}</h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm">{description}</p>
          </div>
          <div className="px-6 py-2">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-full"
            >
              Ver en GitHub
            </a>
          </div>
        </div>
      );
}