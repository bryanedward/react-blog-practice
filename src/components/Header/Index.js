import React from 'react'
import './style.css'

const indexHeader = props => {
     return(
         <header className="header">
             <nav className="headerMenu">
                 <a href="#">Inicio</a>
                 <a href="#">Proyectos</a>
             </nav>
             <div>
                 redes sociales
             </div>
         </header>
     )   
}

export default indexHeader