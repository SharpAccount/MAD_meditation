import React, { useContext } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BottomTabs from "./BottomTabs";
import { SideBarButton } from "./sideBarButton";
import Logo from "./logo";
import { useFonts } from "expo-font";
import { Image, Text, View } from "react-native";
import { MenuPage } from "../pages/MenuPage";
import { Plug } from "../pages/Plug";
import { Context } from "../../core/Context";

const TopTab = createMaterialTopTabNavigator();
const TopNBottomTabs = ({navigation}) => {

    const [fontLoaded] = useFonts({
        "Alegreya Sans Medium": require("../../../assets/fonts/AlegreyaSans Medium.ttf")
    })

    const {isProfile, changeProfileState, user, exit} = useContext(Context);

    return (
        <TopTab.Navigator
            initialRouteName="exit"
            screenOptions={
            {
                tabBarStyle: {backgroundColor: "#253334", height:"13%", justifyContent: "flex-end", shadowColor: "#253334"},
                tabBarIndicator: () => null,
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: "#fff",
                swipeEnabled: false,
                tabBarPressColor: "#253334",
                tabBarPressOpacity: 1, // tabBarPressColor but for ios
            }
        }>
            <TopTab.Screen name="Menu" component={MenuPage} options={{
                tabBarIcon: () => <SideBarButton/>,
                tabBarLabel: () => null,
            }} listeners={{
                tabPress: () => {
                    changeProfileState(false)
                }
            }}>

            </TopTab.Screen>
            <TopTab.Screen name="Logo" component={Plug} listeners={{
                tabPress: ev => {
                    ev.preventDefault();
                }}} options ={{
                tabBarLabel: () => null,
                tabBarIcon: () => (
                    <View style={{justifyContent: "center", alignItems: "center", marginBottom: 10}}>
                        <Logo height="41" width="43" color="#fff"/>
                    </View>
                ),
            }}/>
            <TopTab.Screen name="exit" component={BottomTabs} options={{
                tabBarLabel: () => (
                    isProfile
                        ? <Text style={{color: "white", position: "absolute", bottom: 10}}>exit</Text>
                        : null
                ),
                tabBarIcon: () => (
                    isProfile
                        ? null
                        : <Image source={{uri: user.avatar}} style={{width: 36, height: 36, borderRadius: 18}}></Image>
                )
            }}
            listeners={{
                tabPress: () => {
                    changeProfileState(true);
                    if (isProfile) {
                        exit();
                        navigation.navigate("Login");
                    }
                }
            }}/>
        </TopTab.Navigator>
    );
};

export default TopNBottomTabs;