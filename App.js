import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from './screens/Home'
import Loading from './screens/Loading'
import Login from './screens/Login'
import Signup from './screens/Signup'

import * as firebase from 'firebase'

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

const AppStack = createStackNavigator ({
  Home: Home,
});

const AuthStack = createStackNavigator ({
  Login: Login,
  Signup: Signup,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)
