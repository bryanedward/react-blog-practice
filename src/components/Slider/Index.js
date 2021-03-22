import React, { useState, useEffect } from 'react'
import './Style.css'
import IndexCard from '../Ui/Card/Index'
import Service from '../../services/service'
import { NavLink } from 'react-router-dom'

const IndexSlider = (props) => {

    const [post, setPost] = useState([])

    useEffect(() => {
<<<<<<< HEAD
        Service.getAll().on("value", onChange);

        return () => {
            Service.getAll().off("value", onChange)
        }

    }, [])

    const onChange = (items) => {
        //consulta de la base de datos
        let publication = []
        items.forEach(element => {
            let key = element.key;
            let data = element.val();

            publication.push({ key: key, 
                description: data.description,
                date: data.date
             })
        });

        setPost(publication)
    }


=======
        function onChange(params) {
            setPost(params)
        }
        Service.getAll().on("value", onChange)

        return function cleanup() {
            Service.getAll().off("value", onChange)
        }
    })
>>>>>>> c24bb8c8d3fedaa749d451f67599a60aa61adbfb

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
<<<<<<< HEAD
                    {
                        post.map(post => {
                            return (
                                <NavLink key={post.key} to={`${post.key}`}>
                                    <div className="recentPost">
                                        <h3>{post.description}</h3>
                                        <span>{post.date}</span>
                                    </div>
                                </NavLink>
                            )
                        })
                    }
=======

>>>>>>> c24bb8c8d3fedaa749d451f67599a60aa61adbfb
                </div>
            </IndexCard>
        </div>
    )
}

export default IndexSlider
