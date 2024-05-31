import React, {useContext} from 'react';
import {Text, View} from "react-native";
import {useFonts} from "expo-font";
import {Context} from "../../core/Context";
import {useRoute} from "@react-navigation/native";

export const MenuPage = () => {

    const [fontLoaded] = useFonts({
        "Alegreya Medium": require("../../../assets/fonts/Alegreya-Medium.ttf")
    })

    return (
        <View style={{width:"100%", height:"100%", backgroundColor:"#253334", alignItems:"center", justifyContent:"center"}}>
            <Text style={{color: "#fff", fontSize: 30, fontFamily: "Alegreya Medium"}}>Тут будет меню</Text>
        </View>
    );
};