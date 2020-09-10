import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// import { Container } from './styles'

const Feed: React.FC = () => {
const navigation = useNavigation()

    return (
     <View style={{ flex:1, backgroundColor: '#e5e5e5'}}>
        <Text> Hidden </Text>
        <Button title="Identity" onPress={() => navigation.navigate('Identity')}/>
        </View>
        )
}

export default Feed;