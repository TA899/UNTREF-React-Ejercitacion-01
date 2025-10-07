import { useState } from 'react'
import '../css/styles.css'



function Header() {
  return (
      <header className = "main-header">
    <h1>Bienvenidos a Mi Página Completa</h1>
    <nav>
      <ul className="nav-list">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#sobre-mi">Sobre mí</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  </header>)
    
}


function Main () {
  return (
  
  <main>
    <section id="inicio" className = "section">
      <h2>Inicio</h2>
      <p>Esta es una página de ejemplo con más etiquetas de HTML y CSS para practicar la conversión a React.</p>
      <img src="/UNTREF-React-Ejercitacion-01/img/pepegrillo.webp" width="200px" alt="Ejemplo de imagen" />
    </section>

    <section id="sobre-mi" className = "section">
      <h2>Sobre mí</h2>
      <p>Mi nombre es Pepe Grillo y esta es una pequeña descripción sobre mí.</p>
    </section>

    <section id="contacto" className="section">
      <h2>Contacto</h2>
      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" placeholder="Tu nombre"/>
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Tu correo electrónico"/>

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje"/>
        
        <input type="submit" value="Enviar"/> 
       
      </form>
    </section>
  </main>)
}



function Footer() {
  return (
    <footer className ="footer">
    <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
  </footer>
  )
}





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
<Header></Header>

  
<Main></Main>

<Footer></Footer>
    </>
  )
}

export default App
