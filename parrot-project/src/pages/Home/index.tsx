import React from 'react';
import Container from '../../components/Container';
import LoginForm from '../../components/LoginForm';
import Postvazio from '../../components/PostVazio';


const Home: React.FC = () => {
  return (
    <Container>
        <LoginForm />
    </Container>
);
}

export default Home;