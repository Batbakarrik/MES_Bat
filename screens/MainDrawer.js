import React from 'react'
import { createAppContainer, createDrawerNavigator, SafeAreaView, ScrollView } from 'react-navigation'
import { Dimensions } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
// import { Ionicons } from '@expo/vector-icons'

import Current from './drawers/Current'

class Sidemenu extends React.Component {
  render () {
    return (
      <SafeAreaView>
        <View>
        </View>
        <ScrollView>
          <list>
            <listItem>
              <text>
                ANSI 50
              </text>
            </listItem>
            <listItem>
              <text>
                ANSI 59
              </text>
            </listItem>
          </list>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

// const navOptionHandler = (navigation) => ({
//   header: null
// })

const MainStack = createStackNavigator(
  {
    Home: {
      screen: Current,
      // navigationOptions: navOptionHandler,
    },
  },
)

const DrawerItems = createDrawerNavigator ({
  Home: {
    screen: Current,
  },
  contentComponent: Sidemenu,
  drawerWith: ( Dimensions.get('windows').width * 3/4 )
})

export default createAppContainer(DrawerItems)
