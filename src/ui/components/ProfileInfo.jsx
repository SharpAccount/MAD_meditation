import React, {useContext} from 'react';
import {View, Image, Text} from "react-native";
import {Context} from "../../core/Context";
import {useFonts} from "expo-font";

const ProfileInfo = () => {

    const [fontLoaded] = useFonts({
        "Alegreya Regular": require("../../../assets/fonts/Alegreya Regular.ttf"),
        "Alegreya Medium": require("../../../assets/fonts/Alegreya-Medium.ttf"),
        "Alegreya Sans Regular": require("../../../assets/fonts/AlegreyaSans Regular.ttf"),
        "Alegreya Sans Medium": require("../../../assets/fonts/AlegreyaSans Medium.ttf")
    })

    const {user} = useContext(Context);

    return (
        <View style={{marginTop: "5%"}}>
            <Image source={{uri: user.avatar}} style={{objectFit: "cover", height: 150, width: 150, borderRadius: 75, marginTop: 7}}></Image>
            <Text style={{fontFamily: "Alegreya Medium", fontSize: 35, color: "#fff", textAlign: "center"}}>{user.name}</Text>
        </View>
    );
};

export default ProfileInfo;