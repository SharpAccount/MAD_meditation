import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BottomTabs from "./BottomTabs";
import {SideBarButton} from "./sideBarButton";
import {Main} from "../pages/Main";
import Logo from "./logo";
import Sound from "./Sound";
import {useFonts} from "expo-font";
import {StyleSheet} from "react-native";

const TopTab = createMaterialTopTabNavigator();
const TopNBottomTabs = () => {

    const [fontLoaded] = useFonts({
        "Alegreya Sans Medium": require("../../../assets/fonts/AlegreyaSans Medium.ttf")
    })

    return (
        <TopTab.Navigator
            initialRouteName="exit"
        screenOptions={
            {
                tabBarStyle: {backgroundColor: "#253334", height:"13%", justifyContent: "flex-end"},
                tabBarIndicator: () => null,
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: "#fff",
                swipeEnabled: false,
                tabBarPressColor: "#253334",
                tabBarPressOpacity: 1, // tabBarPressColor but for ios
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
            <TopTab.Screen name="exit" component={BottomTabs}/>


        </TopTab.Navigator>
    );
};

export default TopNBottomTabs;