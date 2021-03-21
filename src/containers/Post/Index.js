import React, { useEffect, useState } from 'react'
import './Style.css'
import IndexBlogPost from '../../components/BlogPost/Index'
import IndexSlider from '../../components/Slider/Index'

const IndexPost = ({ data }) => {
    const [status, setStatus] = useState(false)
    const [publication, setPublication] = useState([])
    useEffect(() => {
        if (data == null) {
        } else {
            setPublication(data)
            setStatus(true)
        }
    }, [publication])
    console.log(publication);
    return (
        <div>
            <section className="container_info">
                {
                    status &&
                    <>
                        <p>ho</p>
                    </>
                }
            </section>
            <section className="container">
                <IndexBlogPost />
                <IndexSlider />
            </section>
        </div>
    )
}


export default IndexPost
