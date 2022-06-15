import React from 'react';
import logo from '../../assets/logo2.png';
import * as S from './styled';

const LoginForm: React.FC = () => {
  return (
    <main>
      <div>
        <img src='logo' alt='parrot'/>
        <p>Login</p>
      </div>

      <form>
        <input/>
        <input/>
        <button>entrar</button>
      </form>
    </main>
  );
}

export default LoginForm;