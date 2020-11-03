import React, { Component } from 'react'
import './Style.css'
import Service from '../../services/service'
import IndexCard from '../Ui/Card/Index'
import { Link, NavLink } from 'react-router-dom'
import IndexPost from '../../containers/Post/Index'

export default class IndexBlogPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            publications: [],
            status: true,
            publication: []
        }
        this.onChange = this.onChange.bind(this)
        // this.mostrarInfo = this.mostrarInfo.bind(this)
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

    mostrarInfo(item) {
        const { status } = this.state
        this.setState({ status: !status })
        this.setState({ publication: item })
    }

    render() {
        const { publications, status, publication } = this.state;
        return (

            <div className="blogPostContainer">
                <div>
                    {
                        status &&
                        <>
                            {
                                <div className="blog_post">
                                    <h3>{publication.title}</h3>
                                    <p>{publication.descripcion}</p>
                                </div>
                            }
                        </>
                    }
                </div>
                {
                    publications.map((item, index) => (
                        <IndexCard key={item.key}>
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
                            <button
                                className="link"
                                onClick={() => this.mostrarInfo(item)}>ver mas</button>
                        </IndexCard>
                    ))
                }
            </div>
        )
    }
}
