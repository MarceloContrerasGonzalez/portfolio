export default function Navbar() {
    return(
        <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-10 bg-gray-900 py-2 rounded-full mt-2 border-gray-500 border" >
            <ul className=" justify-center flex space-x-2 pl-1 pr-1 pt-0">
                <li><a href="#" className="hover:text-gray-400 px-4 py-2">Inicio</a></li>
                <li><a href="#about" className="hover:text-gray-400 px-4 py-2">Sobre mí</a></li>
                <li><a href="#projects" className="hover:text-gray-400 px-4 py-2">Proyectos</a></li>
                <li><a href="#contact" className="hover:text-gray-400 px-4 py-2">Contacto</a></li>
            </ul>
        </nav>
    );
}