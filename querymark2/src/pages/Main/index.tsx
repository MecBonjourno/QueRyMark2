import React from 'react';
import { View, Button } from 'react-native';
import {useAuth} from '../../hooks/auth'


// import { Container } from './styles'

const Main: React.FC = () => {
    const {signOut} = useAuth();

    return <View style={{ flex:1, backgroundColor: '#333'}}>
            <Button title="Sair" onPress={signOut}/>

    </View>
}

export default Main;