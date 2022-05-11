import Head from 'next/head'
import Image from 'next/image'

//importar as configurações do firebase
import { app, db } from '../services/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';

//definir a coleção
const contato = collection(db,'contato');

export default function Home() {
  //hooks
  const [nome, SetNome]=useState('')
  const [email, SetEmail]=useState('')
  const [Telefone, SetTelefone]=useState('')
  const [mensagem, SetMensagem]=useState('')

  return (
    <>
    <Head>
      <title>Crud simples com Firestore</title>
    </Head>
    <main className="container">
      <div className="row"></div>
      <div className="col-md">
        <h3 className='text-center'>Cadastrar</h3>
        <input type="text" placeholder='Nome' className='form-control' required />
        <input type="email" placeholder='Email' className='form-control' required />
        <input type="tel" placeholder='Telefone' className='form-control' required />
        <textarea placeholder='Mensagem' className='form-control' required></textarea>
        <input type="button" value="Salvar" className='btn btn-outline-dark form-control'/>
      </div>
      <div className="col-md">
        <h3 className='text-center'>Exibir</h3>
        
      </div>
    </main>
    </>
  )
}
