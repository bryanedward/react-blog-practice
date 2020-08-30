import React from 'react'
import './Style.css'
import IndexBlogPost from '../../components/BlogPost/Index'
import IndexSlider from '../../components/Slider/Index'

const IndexPost = (params) => {
    return (
        <div>
            <section className="container">
                <IndexBlogPost/>
                <IndexSlider/>                
            </section>
        </div>
    )
}


export default IndexPost
