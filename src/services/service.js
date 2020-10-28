import firebase from '../firebase'
import "firebase/firebase-database"
import "firebase/firebase-storage"


class Service {
    getAll() {
        //retornar todas las consultas
        const ser = firebase.database()
        return ser.ref("/publications")
    }

    createPublication(data){
        const ser = firebase.database()
        return ser.ref('/publications').push(data)
    }

    createPost(image){
        //funcion para subir imagenes a firebase storage
        const create = firebase.storage();
        const uploadTask = create.ref('images/'+image.name).put(image);
        return uploadTask;    
    }
}

export default new Service()