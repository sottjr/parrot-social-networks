import React from 'react';
import { Container } from 'react-bootstrap';
import Postvazio from '../../components/PostVazio';
import Usuario from '../../components/Usuario';



const Feed: React.FC = () => {
  return (
    <Container>
      <Usuario />
      <Postvazio />
    </Container>
        
        
    );
}

export default Feed;