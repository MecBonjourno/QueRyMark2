import React from 'react';
import { View, Button } from 'react-native';
import {useAuth} from '../../hooks/auth'
import { useNavigation } from '@react-navigation/native';




// import { Container } from './styles'

const Main: React.FC = () => {
    const {signOut} = useAuth();

    const navigation = useNavigation()

    return (
        <>
        <View style={{ flex:1, backgroundColor: '#333'}}>
            <Button title="Sair" onPress={signOut}/>
           {/* <Link to={Identity}> Identity</Link> */}
           <Button title="Identity" onPress={() => navigation.navigate('Identity')}/>
           <Button title="Feed" onPress={() => navigation.navigate('Feed')}/>
           <Button title="Profile" onPress={() => navigation.navigate('Profile')}/>
           <Button title="Test" onPress={() => navigation.navigate('Bottom')}/>

      </View>
      </>
    )
}

export default Main;