//importar as configurações do firebase
import { app, database } from '../services/firebase'
import { deleteDoc, doc } from 'firebase/firestore'

//  +----------------+
//  | Deletar inicio |
//  +----------------+

function deleteBtn(id){
    const documento = doc(database, "contato", id)
    deleteDoc(documento)
    .then(()=>{
    window.location.reload()
    })
}

export {deleteBtn}

//  +-------------+
//  | Deletar Fim |
//  +-------------+