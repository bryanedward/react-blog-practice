import React from 'react'
import Layout from '../../components/Layout'
import IndexCard from '../../components/Ui/Card/Index'
import Blog from '../../data/infoo.json'
import RecentPost from './RecentPost'
import './Style.css'

const SideImage = props => {
    return (
        <div>
            <img src={props.src} />
        </div>
    )
}

const ImageGallery = props => (
    <div className="galleryPost" style={props.galleryStyle}>
        <section style={{ width: props.largeWidth }}>
            <div className="mainImageWrapper">
                <img src={props.imagesArray[1]} alt="" />
            </div>
        </section>
        <section className={"sideImageWrapper"}
            style={{ width: props.smallWidth }}>
            {
                props.imagesArray.map(image =>
                    <SideImage
                        height={props.sideImageHeight}
                        src={image}
                    />
                )
            }
        </section>
    </div>
)

const indexHome = () => {
    const galleryHeight = 450
    const galleryStyle = {
        height: galleryHeight + 'px',
        overflow: 'hidden'
    }
    const sideImageHeight = galleryHeight / 3
    const imgAr = Blog.map(post => post.photo)
    return (
        <div>
            <IndexCard >
                <ImageGallery
                    largeWidth="70%"
                    smallWidth="30%"
                    sideImageHeight={sideImageHeight}
                    galleryStyle={galleryStyle}
                    imagesArray={imgAr}
                />
            </IndexCard>
            <Layout>
                <RecentPost style={{ width: '70%'}} />
            </Layout>
        </div>
    )
}
export default indexHome