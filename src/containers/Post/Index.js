import React, { useEffect, useState } from 'react'
import './Style.css'
import IndexBlogPost from '../../components/BlogPost/Index'
import IndexSlider from '../../components/Slider/Index'

<<<<<<< HEAD
const IndexPost = () => {

=======
const IndexPost = ({ data }) => {
    const [publication, setPublication] = useState([])
    useEffect(() => {
        if (data == null) {
        } else {
            setPublication(data)
        }
    }, [publication])
>>>>>>> c24bb8c8d3fedaa749d451f67599a60aa61adbfb
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
