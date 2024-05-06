import {View, StyleSheet, Image} from "react-native";
import {useFonts} from "expo-font";
import Header from "../components/HOCs/Header";
import Footer from "../components/HOCs/Footer";
import {useContext, useEffect} from "react";
import {Context} from "../../core/Context";
import ProfileInfo from "../components/ProfileInfo";
import {useRoute} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ProfilePage = () => {

    const [fontLoaded] = useFonts({
        "Alegreya Sans Medium": require("../../../assets/fonts/AlegreyaSans Medium.ttf")
    })

    // const a = async() => {
    //     let a = await AsyncStorage.getItem("userInfo");
    //     //a = JSON.parse(a);
    //     console.log(a);
    // }
    //
    // useEffect(async () => {
    //     await a();
    // }, []);

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