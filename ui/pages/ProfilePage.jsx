import {View, StyleSheet} from "react-native";
import {useFonts} from "expo-font";
import Header from "../component/HOCs/Header";
import Footer from "../component/HOCs/Footer";

export const ProfilePage = () => {
    const [fontLoaded] = useFonts({
        "Alegreya Sans Medium": require("../../assets/fonts/AlegreyaSans Medium.ttf")
    })
    return (
        <View style={{width:"100%", height:"100%", backgroundColor:"#253334", alignItems:"center"}}>
            <View style={{width: "90%"}}>
                <Header/>
                <Footer/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})