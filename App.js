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
import Courant from './screens/Courant'
import Tension from './screens/Tension'
import Thermique from './screens/Thermique'
import Ansi from './screens/Ansi'
import Password from './screens/Password'
import Profile from './screens/Profile'
import Protections from './screens/Protections'

const AuthStack = createStackNavigator()
const Tabs = createBottomTabNavigator()
const HomeStack = createStackNavigator()
const ProtectionsStack = createStackNavigator()
const DonneeStack = createStackNavigator()

const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen
            name="Home"
            component={Home}
        />
    </HomeStack.Navigator>
)
const ProtectionsStackScreen = () => (
    <ProtectionsStack.Navigator>
        <ProtectionsStack.Screen
            name="Protections"
            component={Protections}
        />
        <ProtectionsStack.Screen
            name="Courant"
            component={Courant}
            options={({ route }) => ({
                title: route.params.name
            })}
        />
        <ProtectionsStack.Screen
            name="Tension"
            component={Tension}
        />
        <ProtectionsStack.Screen
            name="Thermique" 
            component={Thermique}
        />
    </ProtectionsStack.Navigator>
)
const DonneeStackScreen = () => (
    <DonneeStack.Navigator>
        <DonneeStack.Screen name="Ansi" component={Ansi} />
        <DonneeStack.Screen name="Password" component={Password} />
    </DonneeStack.Navigator>
)

const ProfileStack = createStackNavigator()
const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
)

const TabsScreen = () => (
    <Tabs.Navigator>
        <Tabs.Screen
            name="Home"
            component={HomeStackScreen}
        />
        <Tabs.Screen
            name="Protections"
            component={ProtectionsStackScreen}
        />
        <Tabs.Screen
            name="Donnee"
            component={DonneeStackScreen}
        />
    </Tabs.Navigator>
)

const Drawer = createDrawerNavigator()

const App = () => {
    const [isLoading, setIsLoading] = useState(true)
    const user = useAuth()

    useEffect(() => {
    setTimeout(() => {
        setIsLoading(false)
    }, 1000)
    }, [])

    if (isLoading) {
        return <Loading/>
    }
    return (
        <FirebaseContext.Provider value={{ user, firebase }}>
            <NavigationContainer>
                {user ? (
                    <Drawer.Navigator initialRouteName="Home">
                        <Drawer.Screen
                            name="Home"
                            component={TabsScreen}
                        />
                        <Drawer.Screen
                            name="Profile"
                            component={ProfileStackScreen}
                        />
                    </Drawer.Navigator>
                ) : (
                    <AuthStack.Navigator>
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
                    </AuthStack.Navigator>
                )}
            </NavigationContainer>
        </FirebaseContext.Provider>
    );
}
export default App