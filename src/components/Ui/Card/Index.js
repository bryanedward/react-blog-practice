import React from 'react'
import './Style.css'

const indexCard = props => {
    return(
        <div className="card">
            <small>{props.children}</small>
        </div>
    )
}

export default indexCard