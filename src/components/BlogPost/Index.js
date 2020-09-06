import React, { useEffect, useState } from 'react'
import './Style.css'
import IndexCard from '../Ui/Card/Index'
import Blog from '../../data/infoo.json'

const IndexBlogPost = (props) => {


    const [post, setPost] = useState({})

    useEffect(() => {
        const idPublication = props.match.params.id
        const infoUser = Blog.find(item => item.id === parseInt(idPublication))
        setPost(infoUser)
    })
    
    return (
        <div className="blogPostContainer">
            <IndexCard >
                <div className="blogHeader">
                    <span className="blogCategory">Destacados</span>
                    <h1 className="postTitle">{post.city_name}</h1>
                    <span className="postedBy">Fecha:</span>
                </div>
                <div className="postImageContainer">
                    <img alt="photo" 
                        src={require('../../postimage/imgtest.jpg')} />
                </div>
                <div className="postContent">
                    <h3>Titulo de las publicaciones</h3>
                    <p>lorem</p>
                </div>
            </IndexCard>
        </div>
    )
}

export default IndexBlogPost