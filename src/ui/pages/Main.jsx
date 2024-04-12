import {ScrollView, View, Text, Image, StyleSheet, Pressable} from "react-native";
import Header from "../components/HOCs/Header";
import Footer from "../components/HOCs/Footer";
import {useContext, useEffect} from "react";
import {Context} from "../../core/Context";
import {useFonts} from "expo-font";

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
        <View style={{width:"100%", height:"100%", paddingTop: "15%", backgroundColor:"#253334", alignItems:"center"}}>
            <View style={{width: "88%"}}>
                <Header/>
                <View style={{marginTop: "8%"}}>
                    <Text style={{fontFamily: "Alegreya Medium", fontSize: 30, color: "#fff"}}>С возвращением, user!</Text>
                    <Text style={{fontFamily: "Alegreya Sans Regular", fontSize: 22, color: "#7C9A92"}}>Каким ты себя ощущаешь сегодня?</Text>
                </View>
                <ScrollView horizontal={true} contentContainerStyle={style.feelings}>
                    {feelings.map((el, idx) => (
                        <View key={idx} style={{minHeight: 85}}>
                            <View style={style.container}>
                                <View style={{maxWidth: 35, maxHeight: 35}}>
                                    <Image source={{uri: el.image}} style={{width: 37, height: 35, flex:1}}/>
                                </View>
                            </View>
                            <Text style={{color: "#ffffff", fontFamily: "Alegreya Sans Regular", fontSize: 12}}>{el.title}</Text>
                        </View>
                    ))}
                </ScrollView>
                    <ScrollView style={{marginTop: "8%", height: "60%"}}>
                        {quotes.map((el, idx) => (
                            <View key={idx} style={{backgroundColor: "#F7F3F0", display: "flex", flexDirection: "row", paddingHorizontal: 30, paddingVertical: 22, borderRadius: 20, marginBottom: 26}}>
                                <View style={{flex:4}}>
                                    <Text style={{fontSize: 25, fontFamily: "Alegreya Medium"}}>{el.title}</Text>
                                    <Text style={{fontSize: 15, fontFamily: "Alegreya Sans Medium"}}>{el.description}</Text>
                                    <Pressable style={style.quoteButton}>
                                        <Text style={{fontFamily: "Alegreya Sans Medium", color: "#fff"}}>подбробнее</Text>
                                    </Pressable>
                                </View>
                                <View style={{flex: 2}}>
                                    <Image source={{uri: el.image}} style={{height: 100, width: 100}}></Image>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    feelings: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: "7%",
    },
    container:  {
        width: 62,
        height: 65,
        borderRadius: 20,
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    quoteButton: {
        backgroundColor: "#253334",
        paddingHorizontal: 31,
        paddingTop: 9,
        paddingBottom: 12,
        width: 138,
        borderRadius: 10,
        marginTop: 16,
    }
})