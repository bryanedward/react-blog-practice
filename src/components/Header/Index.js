import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const indexHeader = props => {
    return (
        <header className="header">
            <nav className="headerMenu">
                <NavLink to="/Publicaciones">Proyectos</NavLink>
            </nav>
            <div>
                redes sociales
             </div>
        </header>
    )
}

export default indexHeader