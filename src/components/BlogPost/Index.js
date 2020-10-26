import React, { Component } from 'react'
import './Style.css'
import Service from '../../services/service'
import IndexCard from '../Ui/Card/Index'
import Blog from '../../data/infoo.json'

export default class IndexBlogPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            publications: []
        }
        this.onChange = this.onChange.bind(this)
    }


    componentDidMount() {
        Service.getAll().on("value", this.onChange)
    }

    componentWillUnmount() {
        Service.getAll().off("value", this.onChange)
    }

    onChange(items) {
        let publication = []

        items.forEach(element => {
            //recorrer los datos y guardalos
            console.log(element.val());
            let key = element.key
            let data = element.val()
            publication.push({
                key: key,
                descripcion: data.description,
                title: data.title,
                img: data.img,
                date: data.date
            })
        });

        this.setState({
            publications: publication
        })
    }

    render() {
        const { publications } = this.state;
        return (
            <div className="blogPostContainer">
                {
                    publications.map((item, index) => (
                        <IndexCard >
                            <div className="blogHeader">
                                <h1 className="postTitle">{item.title}</h1>
                            </div>
                            <div className="postImageContainer">
                                <img alt="photo" src={item.img} />
                            </div>
                            <div className="postContent">
                                <div className="postdetails">
                                    <p>Detalles:</p>
                                    <p>{item.descripcion}</p>
                                </div>
                                <div className="postedBy">
                                    <p >Fecha:</p>
                                    <p>{item.date}</p>
                                </div>
                            </div>
                        </IndexCard>
                    ))
                }
            </div>

        )
    }
}
