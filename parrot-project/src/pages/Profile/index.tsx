import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import ProfileUser from '../../components/Profile'


const Profile: React.FC = () => {
  return (
    <Container>
        <Header/>
        <ProfileUser/>
    </Container>
);
}

export default Profile;