import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo2.png';
import * as S from './styled';

const LoginForm: React.FC = () => {
  
  const location = useLocation()
  useEffect(() => {console.log(location.pathname)},[location.pathname])

  return (
    <S.LoginContainer>
      <S.FormContainer>
        <S.LoginLogo src={logo} alt='parrot'/>
        <S.LoginTittle>{"LOGIN"}</S.LoginTittle>

        <S.LoginForm>
          <S.FormInput
          type='text'
          name='name'
          id='name'
          placeholder='nome'
          />

          <S.FormInput
            type='password'
            name='password'
            id='password'
            placeholder='senha'
          />

          <S.FormButon>entrar</S.FormButon>

        </S.LoginForm>

        <S.FormLink active={location.pathname} to="/cadastro">cadastre-se</S.FormLink>

      </S.FormContainer>
    </S.LoginContainer>
  );
}

export default LoginForm;