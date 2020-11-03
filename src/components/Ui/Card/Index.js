import React from 'react'
import './Style.css'

const IndexCard = props => {

    return (
        <div className="card">
            <small>{props.children}</small>
        </div>
    )
}

export default IndexCard