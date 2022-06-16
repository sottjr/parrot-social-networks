import React from 'react';
import icone from "../../assets/icone.png";
import "./style.css";


const Postvazio: React.FC = () => {
  return (
    <div className='vazio'>
      <p>Você ainda não fez nenhuma publicação </p> 
    <img src={icone} alt="Parrot Social Network"/>
    </div>
  )
}

export default Postvazio;