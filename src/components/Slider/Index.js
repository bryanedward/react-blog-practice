import React, { useState, useEffect } from 'react'
import './Style.css'
import IndexCard from '../Ui/Card/Index'
import Blog from '../../data/infoo.json'
import { NavLink } from 'react-router-dom'

const IndexSlider = (props) => {

    const [post, setPost] = useState([])

    useEffect(() => {
        const post = Blog
        setPost(post)
    }, [post])

    return (
        <div className="sliderBar" style={{
            width: props.width
        }}>
            <IndexCard>
                {/* barra derecha de las publicaciones */}
                <div className="cardHeader" >
                    <span>Proximamente</span>
                </div>
                <div className="cardBody">
                    <small className="personalBio">Informacion</small>
                </div>
            </IndexCard>
            <IndexCard>
                <div className="cardHeader">
                    <span>Redes sociales</span>
                    <div className="cardImg">
                        <i class="fa fa-instagram"></i>
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
                    {
                        post.map(post => {
                            return (
                                <NavLink key={post.id} to={`${post.id}`}>
                                    <div className="recentPost">
                                        <h3>{post.city_name}</h3>
                                        <span>{post.country_name}</span>
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </IndexCard>
        </div>
    )
}

export default IndexSlider
