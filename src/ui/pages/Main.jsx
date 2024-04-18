import {ScrollView, View, Text, Image, StyleSheet, Pressable} from "react-native";
import Header from "../components/HOCs/Header";
import Footer from "../components/HOCs/Footer";
import {useContext, useEffect} from "react";
import {Context} from "../../core/Context";
import {useFonts} from "expo-font";
import Feelings from "../components/Feelings";
import Quotes from "../components/Quotes";

export const Main = () => {

    const {feelings, getFeelings, quotes, getQuotes} = useContext(Context)
    const [fontLoaded] = useFonts({
        "Alegreya Regular": require("../../../assets/fonts/Alegreya Regular.ttf"),
        "Alegreya Medium": require("../../../assets/fonts/Alegreya Medium.ttf"),
        "Alegreya Sans Regular": require("../../../assets/fonts/AlegreyaSans Regular.ttf"),
        "Alegreya Sans Medium": require("../../../assets/fonts/AlegreyaSans Medium.ttf")
    })

    useEffect(()=> {
        getFeelings();
        getQuotes();
    }, [])

    return (
        <View style={{width:"100%", height:"100%", paddingTop: "5%", backgroundColor:"#253334", alignItems:"center"}}>
            <View style={{width: "88%"}}>
                {/*<Header/>*/}
                <View style={{marginTop: "8%"}}>
                    <Text style={{fontFamily: "Alegreya Medium", fontSize: 30, color: "#fff"}}>С возвращением, user!</Text>
                    <Text style={{fontFamily: "Alegreya Sans Regular", fontSize: 22, color: "#7C9A92"}}>Каким ты себя ощущаешь сегодня?</Text>
                </View>
                <Feelings/>
                <Quotes/>
            </View>
        </View>
    )
}