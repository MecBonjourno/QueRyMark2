import React from 'react';
import { View, Image } from 'react-native';

import logoImg from '../../assets/logoWhite.png'

import { Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountButtonText } from './styles'
// import { Container } from './styles'

const SignIn: React.FC = () => {
    return (
    <Container>
        <Image source={logoImg} 
        style={{maxWidth: 150 , maxHeight: 120}}/>
        <View>
            <Title> This is a new project by MecBonjourno</Title>
        </View>
     </Container>
        )
}

export default SignIn;