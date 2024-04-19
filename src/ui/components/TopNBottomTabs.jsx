import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BottomTabs from "./BottomTabs";
import {SideBarButton} from "./sideBarButton";
import {Main} from "../pages/Main";
import Logo from "./logo";
import Sound from "./Sound";
import {useFonts} from "expo-font";

const TopTab = createMaterialTopTabNavigator();
const TopNBottomTabs = () => {

    const [fontLoaded] = useFonts({
        "Alegreya Sans Medium": require("../../../assets/fonts/AlegreyaSans Medium.ttf")
    })

    return (
        <TopTab.Navigator
            initialRouteName="Main"
        screenOptions={
            {
                tabBarStyle: {backgroundColor: "#253334", height:"13%", justifyContent: "flex-end"},
                tabBarIndicator: () => null,
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: "#fff",
                swipeEnabled: false,
            }
        }>
            <TopTab.Screen name="Menu" component={Sound} options={{
                tabBarIcon: () => <SideBarButton/>,
                tabBarLabel: () => null,
            }}>

            </TopTab.Screen>
            <TopTab.Screen name="Logo" component={() => null} listeners={{
                tabPress: ev => {
                    ev.preventDefault();
                }}} options ={{
                tabBarLabel: () => null,
                tabBarIcon: () => <Logo height="49" width="45" color="#fff"/>,
            }}/>
            <TopTab.Screen name="Main" component={BottomTabs} options={{
                tabBarLabel: "exit",
            }}/>


        </TopTab.Navigator>
    );
};

export default TopNBottomTabs;