import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import firebase, { FirebaseContext } from './src/firebase'
import useAuth from './src/hooks/useAuth'

import Home from './screens/Home'
import Loading from './screens/Loading'
import SignIn from './screens/SignIn'
import Signup from './screens/Signup'
import ResetPwd from './screens/ResetPwd'
import Courant from './screens/Courant'
import Tension from './screens/Tension'
import Thermique from './screens/Thermique'
import Ansi from './screens/Ansi'
import Password from './screens/Password'
import Profile from './screens/Profile'
import Protections from './screens/Protections'
import Donnees from './screens/Donnees'

import colors from './src/utils/colors'
import { Ionicons } from '@expo/vector-icons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const AuthStack = createStackNavigator()
const AuthStackScreen = () => (
    <AuthStack.Navigator headerMode="none">
        <AuthStack.Screen
            name="SignIn"
            component={SignIn}
            options={{ title: 'Sign In'}}
        />
        <AuthStack.Screen
            name="Signup"
            component={Signup}
            options={{ title: 'Sign Up'}}
        />
        <AuthStack.Screen
            name="ResetPwd"
            component={ResetPwd}
            options={{ title: 'Reset Password'}}
        />
    </AuthStack.Navigator>
)

const Tabs = createBottomTabNavigator()
const HomeStack = createStackNavigator()
const ProtectionsStack = createStackNavigator()
const DonneeStack = createStackNavigator()

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator /*headerMode="none"*/>
        <HomeStack.Screen
            name="Home"
            component={Home}
            options={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: colors.background},
                headerTitle: "Sommaire",
                headerTitleStyle:{
                    textAlign: "center"
                },
                // headerLeft: () => {
                //     if (user === "toto") {
                //         <Button
                //             title="Profile"
                //             onPress= {() => navigation.toggleDrawer()}
                //         />
                //     }
                // }
            }}
        />
    </HomeStack.Navigator>
)
const ProtectionsStackScreen = () => (
    <ProtectionsStack.Navigator 
        screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: colors.background}
        }}
    >
        <ProtectionsStack.Screen
            name="PROTECTIONS"
            component={Protections}
        />
        <ProtectionsStack.Screen
            name="COURANT"
            component={Courant}
            // options={({ route }) => ({
            //     title: route.params.name
            // })}
        />
        <ProtectionsStack.Screen
            name="TENSION"
            component={Tension}
        />
        <ProtectionsStack.Screen
            name="THERMIQUE" 
            component={Thermique}
        />
    </ProtectionsStack.Navigator>
)
const DonneeStackScreen = () => (
    <DonneeStack.Navigator
        screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: colors.background}
        }}
    >
        <DonneeStack.Screen name="BASE DE DONNEES" component={Donnees}/>
        <DonneeStack.Screen name="CODES" component={Ansi} />
        <DonneeStack.Screen name="MOTS DE PASSE" component={Password} />
    </DonneeStack.Navigator>
)
const ProfileStack = createStackNavigator()
const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
)
const TabsScreen = () => (
    <Tabs.Navigator
        tabBarOptions={{
            style:{
                backgroundColor: colors.background
            }
        }}
    >
        <Tabs.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                activeTintColor: '#00E8AC',
                tabBarIcon: () => (
                    <Icons name="home-outline" size={24} color={'white'}></Icons>
                )
            }}
        />
        <Tabs.Screen
            name="Protections"
            component={ProtectionsStackScreen}
            options={{
                tabBarLabel: 'Protections',
                tabBarOptions: {
                    
                },
                tabBarIcon: () => (
                    <Icons name="calculator" size={24} color={'white'}></Icons>
                )
            }}
        />
        <Tabs.Screen
            name="Donnee"
            component={DonneeStackScreen}
            options={{
                tabBarLabel: 'Donnee',
                tabBarIcon: () => (
                    <Icons name="format-list-bulleted" size={24} color={'white'}></Icons>
                )
            }}
        />
    </Tabs.Navigator>
)
const Drawer = createDrawerNavigator()
const DrawerScreen = (() => (
    <Drawer.Navigator /*initialRouteName="Home"*/
        drawerStyle={{
            backgroundColor: colors.background
        }}
    >
            <Drawer.Screen
                name="Home"
                component={TabsScreen}
                options={{
                    drawerIcon: ({focused, size}) => (
                        <Ionicons
                        name="ios-home"
                        size={size}
                        color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={ProfileStackScreen}
                options={{
                    drawerIcon: ({focused, size}) => (
                        <Ionicons
                        name="ios-home"
                        size={size}
                        color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }}
            />
    </Drawer.Navigator>
))
const RootStack = createStackNavigator()
const RootStackScreen = ({user}) => (
    <RootStack.Navigator headerMode="none">
        {user ? (
            <RootStack.Screen name="App" component={DrawerScreen}/>
            ) : (
            <RootStack.Screen name="Auth" component={AuthStackScreen}/>
        )}
    </RootStack.Navigator>
)
const App = () => {
    const [isLoading, setIsLoading] = useState(true)
    const user = useAuth()
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }, [])
    
    if (isLoading) {
        return <Loading/>
    }
    return (
        <FirebaseContext.Provider value = {{ user, firebase }}>
            <NavigationContainer>
                <RootStackScreen user = {user}/>
            </NavigationContainer>
        </FirebaseContext.Provider>
    );
}
export default App