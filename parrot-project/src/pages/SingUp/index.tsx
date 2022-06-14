import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import SingUpForm from '../../components/SingUpForm';


const SingUp: React.FC = () => {
  return (
    <Container>
        <Header/>
        <SingUpForm/>
    </Container>
);
}

export default SingUp;