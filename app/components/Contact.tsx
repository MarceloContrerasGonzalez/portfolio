export default function Contact(){
    return(
    <div>
      <h2>Contacto</h2>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Correo:</label>
        <input type="email" id="email" name="email" />

        <button type="submit">Enviar</button>
      </form>
    </div>
    );
}