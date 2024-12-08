import Image from "next/image";


export default function Footer(){
    return(
        
        <footer className=" bg-gray-900 text-white p-6 text-center border-gray-700 border-t">
            <div className="flex items-center justify-between">
                <p>© 2024 Mi Portafolio. Todos los derechos reservados.</p>

                <div className="flex gap-4">
          
                    {/* GitHub */}
                    <a href="https://github.com/MarceloContrerasGonzalez" target="_blank" rel="noopener noreferrer">
                        <Image src="images/github.svg"alt="GitHub" width={24} height={24}/>
                    </a>

                    {/* LinkedIn */}
                    <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer">
                        <Image src="images/linkedin.svg" alt="LinkedIn" width={24} height={24}/>
                    </a>

                    {/* Correo */}
                    <a href="mailto:marcelocg2002@gmail.com">
                        <Image src="images/work.svg" alt="Correo" width={24} height={24}/>
                    </a>

                </div>
            </div>
        </footer>
    );
}