import {ImageBackground, Text, View, StyleSheet, TouchableOpacity, Pressable} from "react-native";
import Logo from "../component/logo";
import {useFonts} from "expo-font";

const OnBoarding = ({navigation}) => {
    const [fontLoaded] = useFonts({
        "Alegreya Regular": require("../../assets/fonts/Alegreya Regular.ttf"),
        "Alegreya Medium": require("../../assets/fonts/Alegreya Medium.ttf"),
        "Alegreya Sans Medium": require("../../assets/fonts/AlegreyaSans Medium.ttf"),
        "Alegreya Sans Regular": require("../../assets/fonts/AlegreyaSans Regular.ttf")
    })
    return (
        <ImageBackground
            source={require("../../assets/2752811 1.png")}
            style={{height: "100%", width: "100%", alignItems: "center"}}>
            <View style={{width:"90%", alignItems: "center"}}>
                <View style={{marginTop: "50%"}}>
                    <Logo width="191" height="199" color="#fff"/>
                </View>
                <View style={{alignItems: "center", width: "100%", marginTop:"7%", gap: 6}}>
                    <Text style={style.header}>ПРИВЕТ</Text>
                    <Text style={[style.paragraph, {textAlign: "center"}]}>Наслаждайся отборочными.{"\n"}Будь внимателен.{"\n"}Делай хорошо.</Text>
                </View>
                <View style={{marginTop:"35%", gap: 20, alignItems: "center"}}>
                    <Pressable style={style.button} onPress={() => {navigation.navigate("Login")}}>
                        <Text style={{fontSize: 25, color: "white", fontFamily: "Alegreya Sans Medium", padding: 20, textAlign: "center",}}>Войти в аккаунт</Text>
                    </Pressable>
                    <TouchableOpacity style={{alignItems: "center"}} onPress={() => navigation.navigate("Register")}><Text style={[style.paragraph, {fontFamily: "Alegreya Sans Regular"}]} onPress={() => {navigation.navigate("Register")}}><Text>Ещё нет аккаунта? </Text><Text style={{fontFamily: "Alegreya Sans Medium"}}>Зарегестрируйтесь</Text></Text></TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}
export default OnBoarding;

const style = StyleSheet.create({
    header: {
        color: "white",
        fontSize: 34,
        fontFamily: "Alegreya Medium"
    },
    paragraph: {
        color: "white",
        fontSize: 20,
        fontFamily: "Alegreya Regular"
    },
    button: {
        alignItems: "center",
        backgroundColor: "#7C9A92",
        paddingRight: "15%",
        paddingLeft: "15%",
        borderRadius: 10
    }
})