//importar as configurações do firebase
import { app, database } from '../services/firebase'
import { collection, deleteDoc, getDocs, orderBy, query, doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

//  +----------------+
//  | update comceço |
//  +----------------+

const [ID, setID] = useState(null)
const [contatoUnico, setContatoUnico] = useState({})
const [mostrar, setMostrar] = useState(false)

//hooks
const[nome, setNome] = useState('')
const[email, setEmail] = useState('')
const[telefone, setTelefone] = useState('')
const[mensagem, setMensagem] = useState('')

const show = async(id)=>{
  setID(id)
  if(ID != null){
    const contatoSimples = doc(database,"contato",ID)
    const resultado = await getDoc(contatoSimples)
    setContatoUnico({...resultado.data(),id:resultado.id})
    setNome(contatoUnico.nome)
    setEmail(contatoUnico.email)
    setTelefone(contatoUnico.telefone)
    setMensagem(contatoUnico.mensagem)
    setMostrar(true)
  }
}
useEffect(()=>{
  show()
},[ID])

//  +------------+
//  | update fim |
//  +------------+