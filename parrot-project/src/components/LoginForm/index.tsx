import React from 'react';
import logo from '../../assets/logo2.png';
import * as S from './styled';

const LoginForm: React.FC = () => {
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

        <S.FormText href="#">Não tem uma conta? Registre-se</S.FormText>

      </S.FormContainer>
    </S.LoginContainer>
  );
}

export default LoginForm;