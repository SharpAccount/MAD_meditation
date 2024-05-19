import {View, StyleSheet} from "react-native";
import {useFonts} from "expo-font";
import ProfileInfo from "../components/ProfileInfo";
import Photos from "../components/Photos";

export const ProfilePage = ({navigation}) => {

    const [fontLoaded] = useFonts({
        "Alegreya Sans Medium": require("../../../assets/fonts/AlegreyaSans Medium.ttf")
    })

    return (
        <View style={{width:"100%", height:"100%", backgroundColor:"#253334", alignItems:"center"}}>
            <View style={{width: "90%", alignItems: "center"}}>
                <ProfileInfo/>
                <Photos navigation={navigation}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})