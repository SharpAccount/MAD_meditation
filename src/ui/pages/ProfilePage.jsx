import {View, StyleSheet, Image} from "react-native";
import {useFonts} from "expo-font";
import Header from "../components/HOCs/Header";
import Footer from "../components/HOCs/Footer";
import {useContext} from "react";
import {Context} from "../../core/Context";

export const ProfilePage = () => {

    const {user} = useContext(Context);

    const [fontLoaded] = useFonts({
        "Alegreya Sans Medium": require("../../../assets/fonts/AlegreyaSans Medium.ttf")
    })
    return (
        <View style={{width:"100%", height:"100%", paddingTop: "15%", backgroundColor:"#253334", alignItems:"center"}}>
            <View style={{width: "90%"}}>
                {/*<Header/>*/}
                <Image source={{uri: user.avatar}} style={{objectFit: "cover", height: 150, width: 150, borderRadius: 75, marginTop: 7}}></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})