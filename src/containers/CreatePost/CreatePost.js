
import React, { Component } from 'react'
import './style.css'
import Service from '../../services/service'

export default class CreatePost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            image: null,
            progress: 0,
            url: ""
        }
    }

    changeImg = e => {
        //obtener los datos de la imagen
        if (e.target.files[0]) {
            const image = e.target.files[0]
            this.setState(() => ({
                image
            }))
        }
    }

    uploadImage = () => {        
        const { image } = this.state;
        Service.createPost(image);
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
                                    <label> Ingreso del titulo</label>
                                    <input placeholder="Titulo" />
                                </div>
                                <div className="form-group">
                                    <label> Ingreso del descripcion</label>
                                    <input placeholder="Descripcion" />
                                </div>
                                <button onClick={this.uploadImage} className="btn btn-success"> Enviar Publicaciòn</button>
                            </div>
                            <div className="form-file">
                                <input type="file" name="imagen" onChange={this.changeImg} />
                            </div>
                        </div>)
                }
            </div>
        )

    }
}

