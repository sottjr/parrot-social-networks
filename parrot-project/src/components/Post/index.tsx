import React from 'react';
import Peril from "../../assets/perfil.png";
import * as S from './style.css';
import "./style.css";


const Post: React.FC = () => {
  return (
    <section className='sessao-publi'>
        <div className='img-usuario'>
        <img src= {Peril} alt='parrot'/>
        </div>
        <div className='pub-conteudo'>
          <textarea></textarea>
        <button>public</button>
        </div>
    </section>
  )
}

export default Post;