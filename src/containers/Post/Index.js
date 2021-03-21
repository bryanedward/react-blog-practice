import React, { useEffect, useState } from 'react'
import './Style.css'
import IndexBlogPost from '../../components/BlogPost/Index'
import IndexSlider from '../../components/Slider/Index'

const IndexPost = ({ data }) => {
    const [publication, setPublication] = useState([])
    useEffect(() => {
        if (data == null) {
        } else {
            setPublication(data)
        }
    }, [publication])
    return (
        <div>
            <section className="container">
                <IndexBlogPost />
                <IndexSlider />
            </section>
        </div>
    )
}


export default IndexPost
