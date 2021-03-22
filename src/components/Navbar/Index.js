import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Style.css'

const IndexNavbar = () => {

    const [search, setSearch] = useState(false)


    const submitSearch = (e) => {
        e.preventDefault()
        alert('Buscar')
    }

    const openSearch = () => {
        setSearch(true)
    }

    const searchClass = search ? 'searchInput active' : 'searchInput'

    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/Publicaciones">Publicaciones</NavLink></li>
                <li><NavLink to="/CrearPost">Crear</NavLink></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                    <input type="text" className={searchClass} placeholder="Buscar" />
                    <img onClick={openSearch} className="searchIcon" src={require('../../assets/icons/search.png')} alt="serch" />
                </form>
            </div>
        </div>
    )
}

export default IndexNavbar