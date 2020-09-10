import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// import { Container } from './styles'

const Feed: React.FC = () => {
const navigation = useNavigation()

    return (
     <View style={{ flex:1, backgroundColor: '#857623'}}>
        <Text> Feed </Text>
        <Button title="Eu estava escondido" onPress={() => navigation.navigate('Hidden')}/>
        </View>
        )
}

export default Feed;