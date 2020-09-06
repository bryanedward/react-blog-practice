import React from 'react'
import './Style.css'
import IndexBlogPost from '../../components/BlogPost/Index'
import IndexSlider from '../../components/Slider/Index'

const IndexPost = (props) => {
    return (
        <div>
            <section className="container">
                <IndexBlogPost {...props}/>
                <IndexSlider/>                
            </section>
        </div>
    )
}


export default IndexPost
