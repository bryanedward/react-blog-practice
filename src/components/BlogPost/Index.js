import React, { useEffect, useState } from 'react'
import './Style.css'
import IndexCard from '../Ui/Card/Index'
import Blog from '../../data/infoo.json'

const IndexBlogPost = (props) => {

    const [post, setPost] = useState({
        id: "",
        city_name: "",
        country_name: "",
        street: "",
        country: "",
        photo: ""
    })
    const [postId, setPostId] = useState("")

    useEffect(() => {
        const postId = props.match.params.id
        const infoUser = Blog.find(item => item.id === parseInt(postId))
        setPost(infoUser)
        setPostId(postId)
    }, [post, props.match.params.id])


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
                        src={post.photo} />
                </div>
                <div className="postContent">
                    <h3>{post.country}</h3>
                    <p>lorem</p>
                </div>
            </IndexCard>
        </div>
    )
}

export default IndexBlogPost