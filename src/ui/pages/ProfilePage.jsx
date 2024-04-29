import {View, StyleSheet, Image} from "react-native";
import {useFonts} from "expo-font";
import Header from "../components/HOCs/Header";
import Footer from "../components/HOCs/Footer";
import {useContext} from "react";
import {Context} from "../../core/Context";
import ProfileInfo from "../components/ProfileInfo";
import {useRoute} from "@react-navigation/native";

export const ProfilePage = () => {

    const [fontLoaded] = useFonts({
        "Alegreya Sans Medium": require("../../../assets/fonts/AlegreyaSans Medium.ttf")
    })

    return (
        <View style={{width:"100%", height:"100%", backgroundColor:"#253334", alignItems:"center"}}>
            <View style={{width: "90%", alignItems: "center"}}>
                <ProfileInfo/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})