import React from 'react';
import {View, Text} from "react-native";
import {useFonts} from "expo-font";

const RegisterPage = () => {

    const [fontLoaded] = useFonts({
        "Alegreya Medium": require("../../assets/fonts/Alegreya Medium.ttf")
    })

    return (
        <View style={{width:"100%", height:"100%", backgroundColor:"#253334", alignItems:"center", justifyContent:"center"}}>
            <Text style={{color: "white", fontSize: 30, fontFamily: "Alegreya Medium"}}>Тут будет{"\n"}регистрация</Text>
        </View>
    );
};

export default RegisterPage;