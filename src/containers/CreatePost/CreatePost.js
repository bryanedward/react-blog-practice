import React, { Component } from 'react'
import './style.css'
import Service from '../../services/service'

export default class CreatePost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            description: "",
            image: null,
            progress: 0,
            title: "",
            url: "",
            status: false
        }
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeDescription = this.onChangeDescription.bind(this)
    }

    onChangeTitle = e => {
        this.setState({
            title: e.target.value
        })
    }

    onChangeDescription = e => {
        this.setState({
            description: e.target.value
        })
    }

    savePublication() {
        var date = new Date();
        let data = {
            title: this.state.title,
            description: this.state.description,
            img: this.state.url,
            date: `${date.getFullYear().toString()} - ${date.getMonth().toString()}`
        }
        Service.createPublication(data).then(() => {
            this.setState({ status: false })
        })
    }

    changeImg = e => {
        //obtener los datos de la imagen
        if (e.target.files[0]) {
            const image = e.target.files[0]
            this.setState(() => ({ image }))
        }
    }

    uploadImage = () => {
        const { image, title, description } = this.state;
        if ((title.trim() !== '' || description.trim() !== '') && image != null) {
            this.setState({ status: true })
            var uploadTask = Service.createPost(image);
            uploadTask.on('state_changed', snapshot => { },
                error => { console.log(error) },
                async () => {
                    const url = await uploadTask.snapshot.ref.getDownloadURL()
                    this.setState({ url })
                    this.savePublication()
                })
        }
    }


    render() {
        return (
            <div className="submit-form">
                {
                    false ?
                        (<div><h4>Publicaciòn creado</h4></div>) :
                        (<div className="form-groups">
                            <div>
                                <div className="form-group">
                                    <label htmlFor=""> Ingreso del titulo</label>
                                    <input
                                        id="title"
                                        name="title"
                                        placeholder="Titulo"
                                        onChange={this.onChangeTitle}
                                        required />
                                </div>
                                <div className="form-group">
                                    <label> Ingreso del descripcion</label>
                                    <input
                                        id="description"
                                        name="description"
                                        placeholder="Descripcion"
                                        onChange={this.onChangeDescription}
                                        required />
                                </div>

                                <button
                                    className="btn btn-success"
                                    onClick={this.uploadImage}
                                    disabled={this.state.status}>
                                    Enviar Publicaciòn</button>
                            </div>
                            <div className="form-file">
                                <input type="file" name="imagen" onChange={this.changeImg} />
                                <img src={this.state.url} />
                            </div>
                        </div>)
                }
            </div>
        )

    }
}

