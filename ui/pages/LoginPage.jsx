import {View, Text, StyleSheet, TextInput, Pressable} from "react-native";
import {useFonts} from "expo-font";
import {Logo} from "../component/logo";

export const LoginPage = ({navigation}) => {
    const [fontLoaded] = useFonts({
        "Alegreya Regular": require("../../assets/fonts/Alegreya Regular.ttf"),
        "Alegreya Medium": require("../../assets/fonts/Alegreya Medium.ttf"),
        "Alegreya Sans Regular": require("../../assets/fonts/AlegreyaSans Regular.ttf"),
        "Alegreya Sans Medium": require("../../assets/fonts/AlegreyaSans Medium.ttf")
    })
    return (
        <View style={{width:"100%", height:"100%", backgroundColor:"#253334", alignItems:"center"}}>
            <View style={{width: "80%"}}>
                <View style={{gap:15, marginTop: "40%"}}>
                    <Text style={style.header}>Logo is here</Text>
                    {/*<View style={{width:10}}>*/}
                    {/*    <Logo style={{width: 20, height: 20}}/>*/}
                    {/*</View>*/}
                    <Text style={style.header}>Sign in</Text>
                </View>
                <View style={{marginTop:"45%", gap:30}}>
                    <TextInput style={[style.paragraph, style.input, {color: "#BEC2C2", fontFamily: "Alegreya Sans Regular", padding: 7}]} placeholder={"Email"} placeholderTextColor={"#BEC2C2"}/>
                    <TextInput style={[style.paragraph, style.input, {color: "#BEC2C2", fontFamily: "Alegreya Sans Regular", padding: 7}]} placeholder={"Пароль"} placeholderTextColor={"#BEC2C2"}/>
                    <Pressable style={[style.button, {marginTop:"10%", marginBottom:"7%"}]}>
                        <Text style={style.buttonText}>Sign in</Text>
                    </Pressable>
                </View>
                <View>
                    <Text style={[style.paragraph, {color:"white"}]}>Register</Text>
                    <Pressable style={[style.button, {marginTop: "7%"}]} onPress={()=> navigation.navigate("Register")}>
                        <Text style={style.buttonText}>Профиль</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        color: "white",
        fontSize: 34,
        fontFamily: "Alegreya Medium"
    },
    paragraph: {
        fontSize: 20,
        fontFamily: "Alegreya Sans Regular"
    },
    button: {
        alignItems: "center",
        backgroundColor: "#7C9A92",
        padding: 14,
        paddingRight: "15%",
        paddingLeft: "15%",
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: "Alegreya Sans Medium",
        color: "white",
        fontSize: 25
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#BEC2C2"
    }
})