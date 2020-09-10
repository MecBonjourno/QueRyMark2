import React from 'react';
import { Button, Image, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import TabRoutes from './tab.routes';

import Main from '../pages/Main'
import Identity from '../pages/Identity'
import Feed from '../pages/Feed';
import Profile from '../pages/Profile';
import Hidden from '../pages/Hidden';

const App = createStackNavigator();

function LogoTitle() {
    return (
      <Image
        style={{ width: 50, height: 50 }}
        source={require('../assets/logoSquaredBlack.png')}
      />
    );
  }

  function BottomTabComponent() {
      return (
          <TabRoutes />
      )
  }

const AppRoutes: React.FC = () => (

// {/* <NavigationContainer> */}
    <App.Navigator initialRouteName="Feed"
    screenOptions={{
        // headerShown: false, 
        cardStyle: { backgroundColor: '#312e38'}
        }}
        >
        <App.Screen name="Main" component={Main} 
        options={{
          headerTitle: props => <LogoTitle />,
          headerRight: () => (
            <Button
              onPress={() => Alert.alert('This is a button!')}
              title="Info"
              color="#000"
            />
          ),
        }}/>
        <App.Screen name="Identity" component={Identity}/>
        <App.Screen name="Feed" component={BottomTabComponent}/>
        <App.Screen name="Profile" component={Profile}/>
        <App.Screen name="Hidden" component={Hidden}/>
        {/* <App.Screen name="Bottom" component={BottomTabComponent}/> */}

    </App.Navigator>
    // </NavigationContainer>
);

export default AppRoutes;