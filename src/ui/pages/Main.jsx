import {View, Text} from "react-native";
import {useContext, useEffect} from "react";
import {Context} from "../../core/Context";
import {useFonts} from "expo-font";
import Feelings from "../components/Feelings";
import Quotes from "../components/Quotes";
import {useRoute} from "@react-navigation/native";

export const Main = () => {

    const [fontLoaded] = useFonts({
        "Alegreya Regular": require("../../../assets/fonts/Alegreya Regular.ttf"),
        "Alegreya Medium": require("../../../assets/fonts/Alegreya Medium.ttf"),
        "Alegreya Sans Regular": require("../../../assets/fonts/AlegreyaSans Regular.ttf"),
        "Alegreya Sans Medium": require("../../../assets/fonts/AlegreyaSans Medium.ttf")
    })
    const {feelings, getFeelings, quotes, getQuotes, user} = useContext(Context)


    useEffect(()=> {
        getFeelings();
        getQuotes();
    }, [])

    return (
        <View style={{width:"100%", height:"100%", paddingTop: "5%", backgroundColor:"#253334", alignItems:"center"}}>
            <View style={{width: "88%"}}>
                <View style={{marginTop: "8%"}}>
                    <Text style={{fontFamily: "Alegreya Medium", fontSize: 30, color: "#fff"}}>С возвращением, {user.name}!</Text>
                    <Text style={{fontFamily: "Alegreya Sans Regular", fontSize: 22, color: "#7C9A92"}}>Каким ты себя ощущаешь сегодня?</Text>
                </View>
                <Feelings/>
                <Quotes/>
            </View>
        </View>
    )
}