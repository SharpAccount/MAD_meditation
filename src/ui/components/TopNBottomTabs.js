import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BottomTabs from "./BottomTabs";
import {SideBarButton} from "./sideBarButton";
import {Main} from "../pages/Main";

const TopTab = createMaterialTopTabNavigator();
const TopNBottomTabs = () => {
    return (
        <TopTab.Navigator
            initialRouteName="Bottom"
        screenOptions={
            {
                tabBarStyle: {backgroundColor: "#253334", height:"10%", justifyContent: "flex-end"},
                tabBarIndicator: () => null,
            }
        }>
            <TopTab.Screen name="Menu" component={() => null} listeners={{
                tabPress: ev => {
                    ev.preventDefault();
                }}} options ={{
                tabBarLabel: () => null,
                tabBarIcon: () => <SideBarButton/>,
            }}/>
            <TopTab.Screen name="Bottom" component={BottomTabs}/>
        </TopTab.Navigator>
    );
};

export default TopNBottomTabs;