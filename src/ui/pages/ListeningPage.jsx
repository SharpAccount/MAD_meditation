import {useFonts} from "expo-font";
import {View, Text} from "react-native";

export const ListeningPage = () => {

    const [fontLoaded] = useFonts({
        "Alegreya Medium": require("../../../assets/fonts/Alegreya Medium.ttf")
    })

    return (
        <View style={{width:"100%", height:"100%", backgroundColor:"#253334", alignItems:"center", justifyContent:"center"}}>
            <Text style={{color: "#fff", fontSize: 30, fontFamily: "Alegreya Medium"}}>Тут будет{"\n"}прослушивание</Text>
        </View>
    )
}