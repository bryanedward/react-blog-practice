import React from 'react'
import IndexCard from '../Ui/Card/Index'
import IndexLogo from '../Logo/Index'
import IndexNavbar from '../Navbar/Index'


const indexHero = props => {
    return(
        <div>
            <IndexCard>
                <div style={{padding:"20px 0"}}>
                    <IndexLogo />
                </div>
                <IndexNavbar/>
            </IndexCard>
        </div>
    )
}


export default indexHero

