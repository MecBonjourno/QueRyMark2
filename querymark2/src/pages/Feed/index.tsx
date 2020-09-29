import React from 'react';
import {  Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import BasicElementsComponent from '../../components/Element/BasicElementsComponent'
// import {Sera} from '../../components/Card'




import { Container, View } from './styles'

const Feed: React.FC = () => {
const navigation = useNavigation()

    return (
        <Container>


            <Text>Feed</Text>
            {/* <Sera /> */}

        </Container>
        )
}

export default Feed;