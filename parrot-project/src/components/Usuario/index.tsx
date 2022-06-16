import React from 'react';
import logo from '../../assets/logo1.png';
import icone from "../../assets/icone.png"
import "./styled.css";


const Usuario: React.FC = () => {
  return (
    <main>
    <section className='logo'>
      <img src= {logo} alt='parrot'/>
    </section>
    <section className='usuario'>
      <p>Olá, usuario</p>
      <a>Sair</a>
    </section>
    </main>
  )
}

export default Usuario;