import {Main} from "./Main";
import {ProfilePage} from "./ProfilePage";
import * as React from 'react';
import Logo from "../components/logo";
import ProfileIcon from "../components/ProfileIcon";
import Sound from "../components/Sound";
import {ListeningPage} from "./ListeningPage";

const {createBottomTabNavigator} = require("@react-navigation/bottom-tabs");


const Tab = createBottomTabNavigator();

export const Router = () => {
    return (
        <Tab.Navigator
            initialRouteName="Main"
            labeled = {false}
            screenOptions={{headerShown: false, tabBarStyle: {backgroundColor: "#253334", height:"10%", borderTopWidth: 0}}}>

            <Tab.Screen name="Main" component={Main} options={{
                tabBarLabel: () => null,
                tabBarIcon: ({focused}) => (
                    focused
                        ? <Logo width="30" height="30" color="#fff"/>
                        : <Logo width="20" height="20" color="#92999a"/>
                )
            }} />
            <Tab.Screen name="Listen" component={ListeningPage} options={{
                tabBarLabel: () => null,
                tabBarIcon: ({focused}) => (
                    focused
                        ? <Sound width="30" height="30" color="#fff"/>
                        : <Sound width="20" height="20" color="#92999a"/>
                )
            }}/>
            <Tab.Screen name="Profile" component={ProfilePage} options={{
                tabBarLabel: () => null,
                tabBarIcon: ({focused}) => (
                    focused
                    ? <ProfileIcon width="30" height="30" color="#fff"/>
                    : <ProfileIcon width="20" height="20" color="#92999a"/>
                )
            }} />

        </Tab.Navigator>
    )
}