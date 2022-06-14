import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import LoginForm from '../../components/LoginForm';

// import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
        <Header/>
        <LoginForm/>
    </Container>
);
}

export default Login;