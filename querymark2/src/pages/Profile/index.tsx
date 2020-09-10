import React from 'react';
import { View, Text, Button } from 'react-native';
import {useAuth} from '../../hooks/auth'


// import { Container } from './styles'

const Profile: React.FC = () => {
    const {signOut} = useAuth();

    return (<View style={{ flex:1, backgroundColor: '#333'}}>
        <Text>Profile</Text>
        <Button title="Sair" onPress={signOut}/>
        
        </View>)
}

export default Profile;