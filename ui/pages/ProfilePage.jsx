import {View, StyleSheet, Image, Pressable, Text} from "react-native";
import {useFonts} from "expo-font";


export const ProfilePage = () => {
    const [fontLoaded] = useFonts({
        "Alegreya Sans Medium": require("../../assets/fonts/AlegreyaSans Medium.ttf")
    })
    return (
        <View style={{width:"100%", height:"100%", backgroundColor:"#253334", alignItems:"center"}}>
            <View style={{width: "90%"}}>
                <View style={{display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center"}}>    
                    <Image source={require("../../assets/Logo (1).png")} style={{width: 43, height: 49}} resizeMode="contain"/>
                    <Pressable>
                        <Text style={{fontFamily: "Alegreya Sans Medium", fontSize: 18, color: "#fff"}}>exit</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})