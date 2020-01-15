import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'

import Home from './screens/Home'
import Loading from './screens/Loading'
import Login from './screens/Login'
import Signup from './screens/Signup'
import Param from './screens/Param'

import * as firebase from 'firebase'
import colors from './src/utils/colors'

var firebaseConfig = {
    apiKey: "AIzaSyCaVkEUsqPO-eGbeZQ7ubhQLwKkylI5hf8",
    authDomain: "spie-mob.firebaseapp.com",
    databaseURL: "https://spie-mob.firebaseio.com",
    projectId: "spie-mob",
    storageBucket: "spie-mob.appspot.com",
    messagingSenderId: "376115758009",
    appId: "1:376115758009:web:b4916082028469ae326c68"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={24} color={tintColor}></Ionicons>
      }
    },
    Param: {
      screen: Param,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-calculator" size={24} color={tintColor}></Ionicons>
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOptions: {
        activeTintColor: '#42f44b',
        inactiveTintColor: 'gray',
        activeBackgroundColor: colors.background,
        inactiveBackgroundColor: colors.background,
      },
    }
    )
  }
)

const AuthStack = createStackNavigator ({
  Login: Login,
  Signup: Signup,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      App: AppTabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)
