import React, { useState, useEffect } from 'react'
import './Style.css'
import IndexCard from '../Ui/Card/Index'
import Service from '../../services/service'
import { NavLink } from 'react-router-dom'

const IndexSlider = (props) => {

    const [post, setPost] = useState([])

    useEffect(() => {
        function onChange(params) {
            setPost(params)
        }
        Service.getAll().on("value", onChange)

        return function cleanup() {
            Service.getAll().off("value", onChange)
        }
    })

    var instagram = () => {
        window.location.href = "https://www.instagram.com"
    }

    console.log(post)
    return (
        <div className="sliderBar">
            <IndexCard>
                <div className="cardHeader">
                    <span>Redes sociales</span>
                    <div className="cardImg">
                        <i class="fa fa-instagram" onClick={instagram}></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-facebook"></i>
                    </div>
                </div>
            </IndexCard>
            <IndexCard>
                <div className="cardHeader">
                    <span>Publicaciones Recientes</span>
                </div>
                <div className="recentPosts">

                </div>
            </IndexCard>
        </div>
    )
}

export default IndexSlider
