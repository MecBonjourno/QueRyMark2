import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from '../pages/Main'
import Identity from '../pages/Identity'
import Feed from '../pages/Feed';
import Profile from '../pages/ProfileOld';

const Tab = createBottomTabNavigator();


const TabRoutes: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      labelPosition: 'beside-icon',
      activeTintColor: '#C72828',
      labelStyle: {
        // fontFamily: 'Poppins-Regular',
        fontSize: 12,
        fontWeight: '600',
      },
      inactiveTintColor: '#B7B7CC',
    //   initialRouteName: 'Feed'
    }}
  >
    {/* <Tab.Screen
      options={{
        // tabBarIcon: ({ color }) => <Icon size={25} name="list" color={color} />,
        title: 'Main',
      }}
      name="Main"
      component={Main}
    /> */}
      <Tab.Screen
        name="Feed"
        options={{
          // tabBarIcon: ({ color }) => (
          //   <Icon size={25} name="heart" color={color} />
          // ),
          title: 'Feed',
        }}
        component={Feed}
      />
    <Tab.Screen
      name="Identity"
      options={{
        // tabBarIcon: ({ color }) => (
        //   <Icon size={25} name="shopping-bag" color={color} />
        // ),
        title: 'Identity',
      }}
      component={Identity}
    />
    <Tab.Screen
      options={{
        // tabBarIcon: ({ color }) => <Icon size={25} name="list" color={color} />,
        title: 'Profile',
      }}
      name="Profile"
      component={Profile}
    />
  </Tab.Navigator>
);

export default TabRoutes;