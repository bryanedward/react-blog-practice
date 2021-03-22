import React, { Component } from 'react'
import './style.css'


const IndexFloat = ({ data }) => {
    const { descripcion } = data

    return (
        <div className="publication_post">
            <small>{descripcion}</small>
        </div>
    )
}

export default IndexFloat