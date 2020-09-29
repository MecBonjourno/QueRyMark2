import React from 'react';
import { View, Text,} from 'react-native';
import { ScrollView, } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Container, ButtonLink, ButtonText, Name, Avatar, QRID, CenterView, QRcode } from './styles'

const Identity: React.FC = () => {
    return (

    <Container>
                <CenterView >
                <View >
                    <Avatar source={ require("../../assets/logoSquaredBlack.png")} />                   
                <Name>
                        Zago Loko
                        </Name>
                    </View>
                
                    <QRID>
                        <QRcode source={require("../../assets/logoWhite.png")} />
                    </QRID>

                        <ButtonLink>
                            <ButtonText>Connect</ButtonText>
                            </ButtonLink>
                </CenterView>
        </Container>
        )
}

export default Identity;