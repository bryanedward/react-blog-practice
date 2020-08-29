import React from 'react'
import './Style.css'

const indexNavbar = props => {
    return(
        <div className="navbar">
            <ul className="navbarMenu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Publicaiones</a></li>
                <li><a href="#">Estupideces</a></li>
            </ul>
            <div className="search">
                <input type="text" placeholder="Buscar"/>
                <img src={require('../../assets/icons/search.png')} alt="serch"/>
            </div>
        </div>
    )
}

export default indexNavbar