import {View, Text, StyleSheet, TextInput, Pressable} from "react-native";
import {useFonts} from "expo-font";
import Logo from "../components/logo";
import {useContext, useEffect, useState} from "react";
import {validate} from "@babel/core/lib/config/validation/options";
import {Context} from "../../core/Context";

export const LoginPage = ({navigation}) => {
    const [fontLoaded] = useFonts({
        "Alegreya Regular": require("../../../assets/fonts/Alegreya Regular.ttf"),
        "Alegreya Medium": require("../../../assets/fonts/Alegreya Medium.ttf"),
        "Alegreya Sans Regular": require("../../../assets/fonts/AlegreyaSans Regular.ttf"),
        "Alegreya Sans Medium": require("../../../assets/fonts/AlegreyaSans Medium.ttf")
    })

    const {authorise} = useContext(Context);

    const styles = [style.paragraph, style.input, {color: "#BEC2C2", fontFamily: "Alegreya Sans Regular", padding: 7}];

    const [emailValidStatus, setEmailStatus] = useState(style.input);
    const [email, setEmail] = useState("");

    const [passValidStatus, setPassStatus] = useState(style.input);
    const [password, setPass] = useState("");

    useEffect(() => {
        setEmailStatus(style.input);
        setPassStatus(style.input);
    }, [email, password]);

    const submitData = () => {
        if (!(isEmailValid(email))) {
            setEmailStatus(style.inputError);
            return;
        }
        if (!(isPassValid(password))) {
            setPassStatus(style.inputError);
            return;
        }
        if (!(authorise(email, password))) {
            setEmailStatus(style.inputError);
            setPassStatus(style.inputError);
        }
        navigation.navigate("Router");
    }

    const isEmailValid = (email) => {
        const emailRegex = /\S+@\S+\.\S/;
        return emailRegex.test(email);
    };

    const isPassValid = (pass) => {
        return pass.length > 5
    }

    return (
        <View style={{width:"100%", height:"100%", backgroundColor:"#253334", alignItems:"center"}}>
            <View style={{width: "80%"}}>
                <View style={{gap:15, marginTop: "40%"}}>
                    <View style={{width:10}}>
                        <Logo width="43" height="49" color="#fff"/>
                    </View>
                    <Text style={style.header}>Sign in</Text>
                </View>
                <View style={{marginTop:"45%", gap:30}}>
                    <TextInput style={[style.paragraph, emailValidStatus]} value={email} onChangeText={(text) => setEmail(text)} placeholder={"Email"} placeholderTextColor={"#BEC2C2"}/>
                    <TextInput style={[style.paragraph, passValidStatus]} value={password} onChangeText={(text) => setPass(text)} secureTextEntry={true} placeholder={"Пароль"} placeholderTextColor={"#BEC2C2"}/>
                    <Pressable style={[style.button, {marginTop:"10%", marginBottom:"7%"}]} onPress={submitData}>
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

const style= StyleSheet.create({
    header: {
        color: "white",
        fontSize: 34,
        fontFamily: "Alegreya Medium"
    },
    paragraph: {
        fontSize: 20,
        fontFamily: "Alegreya Sans Regular",
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
        borderBottomColor: "#BEC2C2",
        color: "#BEC2C2",
        padding: 7,
    },
    inputError: {
        borderBottomWidth: 1,
        borderBottomColor: "#ED0505",
        color: "#ED0505",
        padding: 7,
    }
})