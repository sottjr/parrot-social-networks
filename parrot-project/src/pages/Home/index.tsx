import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Feed from '../../components/Feed';

const Home: React.FC = () => {
  return (
    <Container>
        <Header/>
        <Feed/>
    </Container>
);
}

export default Home;