import firebase from '../firebase'
import "firebase/firebase-database"
import "firebase/firebase-storage"


class Service {
    getAll() {
        //retornar todas las consultas
        const ser = firebase.database()
        const db = ser.ref("/publications")
        return db;
    }

    createPost(image){
        //funcion para subir imagenes a firebase storage
        const create = firebase.storage();
        const uploadTask = create.ref('images/'+image.name).put(image);
        uploadTask.on('state_changed', snapshot => {},
            error => { console.log(error) },
            () => {
                create
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    console.log(url);
                })
            })
            
    }
}

export default new Service()