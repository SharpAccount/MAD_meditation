import {ScrollView, View, Text, Image, StyleSheet} from "react-native";
import Header from "../components/HOCs/Header";
import Footer from "../components/HOCs/Footer";
import {useContext, useEffect, useState} from "react";
import {Context} from "../../core/Context";
import {useFonts} from "expo-font";

export const Main = () => {
    const {feelings, getData, routesOfAPI} = useContext(Context)
    const [fontLoaded] = useFonts({
        "Alegreya Regular": require("../../../assets/fonts/Alegreya Regular.ttf"),
        "Alegreya Medium": require("../../../assets/fonts/Alegreya Medium.ttf"),
        "Alegreya Sans Regular": require("../../../assets/fonts/AlegreyaSans Regular.ttf"),
        "Alegreya Sans Medium": require("../../../assets/fonts/AlegreyaSans Medium.ttf")
    })

    useEffect(()=> {
        getData(routesOfAPI.feelings);
    }, [])

    console.log(feelings);
    return (
        <View style={{width:"100%", height:"100%", paddingTop: "15%", backgroundColor:"#253334", alignItems:"center"}}>
            <View style={{width: "90%"}}>
                <Header/>
                    <ScrollView horizontal={true}>
                        {feelings.map((el, idx) => (
                            <View key={idx} style={{minHeight: 85}}>
                                <View style={styles.container}>
                                    <View style={{maxWidth: 35, maxHeight: 35}}>
                                        <Image source={{uri: el.image}} style={{width: 37, height: 35, flex:1}}/>
                                    </View>
                                </View>
                                <Text style={{color: "#ffffff", fontFamily: "Alegreya Sans Regular"}}>{el.title}</Text>
                            </View>
                        ))}
                    </ScrollView>
                <Footer/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
})