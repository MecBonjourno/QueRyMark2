import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {useAuth} from '../../hooks/auth'

// import ProfileComponent from './ProfileComponent'


import { Container, Avatar, ButtonLink, Name, Stats, StatsSpecific, ButtonText } from './styles'

const Profile: React.FC = () => {
    const {signOut} = useAuth();

    return (
    <Container>


        {/* <Text>Profile</Text> */}

        {/* <Button title="Sair" onPress={signOut}/> */}
        

        <View>
                <ScrollView>
                <View style={{ marginTop: 64, alignItems: "center"}}>
                    <View >
                    <TouchableOpacity >
                      <Avatar 
                        source={
                            
                             require("../../assets/logoSquaredBlack.png")
                        }
                        
                        />
                    </TouchableOpacity>
                    </View>
                    
                    <Name>
                        Guigo
                        </Name>
                        <Text >
                        Minha Bio
                        </Text>
            </View>
            <Stats >
             <StatsSpecific >
                <Text>?</Text>
                <Text>Posts</Text>
             </StatsSpecific>
            <StatsSpecific >
                <Text>?</Text>
                <Text>Followers</Text>
            </StatsSpecific>
            <StatsSpecific >
                <Text>?</Text>
                <Text>Following</Text>
            </StatsSpecific>
         </Stats>

         <ButtonLink>
             <ButtonText>Edit Profile</ButtonText>
         </ButtonLink>

        <View >
            
         <ButtonLink>
             <ButtonText>Instagram</ButtonText>
                </ButtonLink>

            <ButtonLink>
                <ButtonText>Twitter</ButtonText>
            </ButtonLink>

            
            <ButtonLink>
                <ButtonText>WhatsApp</ButtonText>
            </ButtonLink>


        <ButtonLink>
                    <ButtonText>Facebook</ButtonText>
            </ButtonLink>

            <Button onPress={signOut} title="Log out"/>
        </View>

          </ScrollView>
         </View>


        </Container>
        )
}

export default Profile;