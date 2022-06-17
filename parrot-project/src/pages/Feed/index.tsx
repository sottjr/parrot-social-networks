import React from 'react';
import { Container } from 'react-bootstrap';
import Post from '../../components/Post';
import Postvazio from '../../components/PostVazio';
import Usuario from '../../components/Usuario';



const Feed: React.FC = () => {
  return (
    <Container>
      <Usuario />
      <Post/>
      <Postvazio />
    </Container>
        
        
    );
}

export default Feed;