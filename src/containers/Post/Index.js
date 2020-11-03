import React, { useEffect, useState } from 'react'
import './Style.css'
import IndexBlogPost from '../../components/BlogPost/Index'
import IndexSlider from '../../components/Slider/Index'

const IndexPost = () => {

    const [publication, setPublication] = useState();



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
