import React from 'react'
import './Style.css'

const IndexCard = props => {
    
    console.log(props);
    return(
        <div className="card" style={{width: props.width ? props.width: '100%'}} {...props}>
            <small>{props.children}</small>
        </div>
    )
}

export default IndexCard