import firebase from '../firebase'

const db = firebase.ref("/publications")

class Service {
    getAll(){
        //retornar todas las consultas 
        return db;    
    }
}


export default new Service()