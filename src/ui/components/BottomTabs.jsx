import * as React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Main} from "../pages/Main";
import {ProfilePage} from "../pages/ProfilePage";
import {ListeningPage} from "../pages/ListeningPage";
import ProfileIcon from "../components/ProfileIcon";
import Logo from "../components/logo";
import Sound from "../components/Sound";
import {useContext} from "react";
import {Context} from "../../core/Context";
import {useNavigation} from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const BottomTabs = () => {

    const {isProfile, changeProfileState} = useContext(Context);

    const navigation = useNavigation();

    return (
        <Tab.Navigator
            initialRouteName="Profile"
            labeled = {false}
            screenOptions={
                {
                    headerShown: false,
                    tabBarStyle: {backgroundColor: "#253334", height:"10%", borderTopWidth: 0},
                }
            }>
            <Tab.Screen name="Main" component={Main} options={{
                tabBarLabel: () => null,
                tabBarIcon: ({focused}) => (
                    focused
                        ? <Logo width="30" height="30" color="#fff"/>
                        : <Logo width="20" height="20" color="#92999a"/>
                ),
            }} listeners={{
                tabPress: () => {
                    changeProfileState(false)
                }
            }} />
            <Tab.Screen name="Listen" component={ListeningPage} options={{
                tabBarLabel: () => null,
                tabBarIcon: ({focused}) => (
                    focused
                        ? <Sound width="30" height="30" color="#fff"/>
                        : <Sound width="20" height="20" color="#92999a"/>
                )
            }} listeners={{
                tabPress: () => {changeProfileState(false)}
            }}/>
            <Tab.Screen name="Profile" component={ProfilePage} options={{
                tabBarLabel: () => null,
                tabBarIcon: ({focused}) => (
                    focused
                        ? <ProfileIcon width="30" height="30" color="#fff"/>
                        : <ProfileIcon width="20" height="20" color="#92999a"/>
                )
            }} listeners={{
                tabPress: () => {
                    changeProfileState(true)
                }
            }} />
        </Tab.Navigator>
    )
};

export default BottomTabs;