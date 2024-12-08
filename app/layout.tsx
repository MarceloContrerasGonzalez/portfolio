import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


//para hacer lo siguiente se necesita importar metadata de next asi podremos cambiar el titulo de la pagina y la descripcion
export const metadata: Metadata = {
  title: "Marcelo Contreras Gonzalez",
  description: "Portafolio creado en next para presentarme y mostrar mis proyectos",
};

//este es el root layout que se encargara de darle estilo a toda la pagina
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <header className="bg-gray-900 text-white p-4">
          <Navbar/>
        </header>
        <main className="min-h-screen p-6 bg-gray-900">
          {children} {/* Aquí se renderizarán las páginas que uses */}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
