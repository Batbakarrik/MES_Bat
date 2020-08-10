import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'

import Home from './screens/Home'
import Loading from './screens/Loading'
import Login from './screens/Login'
import Signup from './screens/Signup'
import Courant from './screens/Courant'
import Tension from './screens/Tension'
import Thermique from './screens/Thermique'

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

  firebase.initializeApp(firebaseConfig);

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: () => <Ionicons name="ios-home" size={24} color={'white'}></Ionicons>
      }
    },
    Courant: {
      screen: Courant,
      navigationOptions: {
        tabBarIcon: () => <Ionicons name="ios-calculator" size={24} color={'white'}></Ionicons>
      }
    },
    Tension: {
      screen: Tension,
      navigationOptions: {
        tabBarIcon: () => <Ionicons name="ios-calculator" size={24} color={'white'}></Ionicons>
      }
    },
    Thermique: {
      screen: Thermique,
      navigationOptions: {
        tabBarIcon: () => <Ionicons name="ios-calculator" size={24} color={'white'}></Ionicons>
      }
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        activeBackgroundColor: colors.backgroundactive,
        inactiveBackgroundColor: colors.background,
      },
    }
    )
  }
)
const navOptionHandler = (navigation) => ({
  headerShown: false
})

const AuthStack = createStackNavigator ({
  Login: Login,
  Signup: Signup,
});

const rootStack = createStackNavigator (
  {
    Loading: {
      screen: Loading,
      navigationOptions: navOptionHandler
    },
    App: {
      screen: TabNavigator,
      navigationOptions: navOptionHandler

    },
    Auth: {
      screen: AuthStack,
      navigationOptions: navOptionHandler
    }
  },
);

// const appDrawer = createDrawerNavigator(
//   {
//     drawer: MainStack
//   },
//   {
//     contentComponent: SideMenu,
//     drawerWith: Dimensions.get('windows').width * 3/4
//   }
// )

const AppContainer = createAppContainer(rootStack);

// export default createAppContainer(TabNavigator);

export default class App extends React.Component {
  render () {
    return <AppContainer />
  }
};

// export default createAppContainer(
//   createSwitchNavigator(
//     {
//       Loading: Loading,
//       App: AppTabNavigator,
//       Auth: AuthStack
//     },
//     {
//       initialRouteName: "Loading"
//     }
//   )
// )
