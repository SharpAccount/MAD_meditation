import { View, Text, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Dimensions } from "react-native";
import { useFonts } from "expo-font";
import Logo from "../components/logo";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../core/Context";
import { Leaves } from "../components/Leaves";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const LoginPage = ({navigation}) => {

    const windowHeight = Dimensions.get("window").height;

    const [fontLoaded] = useFonts({
        "Alegreya Medium": require("../../../assets/fonts/Alegreya Medium.ttf"),
        "Alegreya Regular": require("../../../assets/fonts/Alegreya Regular.ttf"),
        "Alegreya Sans Medium": require("../../../assets/fonts/AlegreyaSans Medium.ttf"),
        "Alegreya Sans Regular": require("../../../assets/fonts/AlegreyaSans Regular.ttf")
    })

    const {authorise, user} = useContext(Context);

    const styles = [style.paragraph, style.input, {color: "#BEC2C2", fontFamily: "Alegreya Sans Regular", padding: 7}];

    const [emailValidStatus, setEmailStatus] = useState(style.input);
    const [email, setEmail] = useState("");

    const [passValidStatus, setPassStatus] = useState(style.input);
    const [password, setPass] = useState("");

    useEffect(() => {
            async function fetchEmail() {
                let userInfo = await AsyncStorage.getItem("userInfo");
                userInfo = JSON.parse(userInfo);
                if (userInfo.email !== "") {
                    setEmail(userInfo.email)
                } else {
                    setEmail(user.email);
                }
        }
        fetchEmail();
    }, []);

    useEffect(() => {

        setEmailStatus(style.input);
        setPassStatus(style.input);
    }, [email, password]);

    const submitData = async () => {
        if (!(isEmailValid(email))) {
            setEmailStatus(style.inputError);
            return;
        } else if (!(isPassValid(password))) {
            setPassStatus(style.inputError);
            return;
        }
        else if (!(await authorise(email, password))) {
            setEmailStatus(style.inputError);
            setPassStatus(style.inputError);
            return;
        }
        setPass("");
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
        <KeyboardAvoidingView style={{flex: 1}} behavior={"padding"}>
            <View style={{width:"100%", height: windowHeight, backgroundColor:"#253334", alignItems:"center"}}>
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
                        <View style={[style.button, {marginTop: "7%"}]}>
                            <Text style={style.buttonText}>Профиль</Text>
                        </View>
                        <Pressable style={{zIndex: 3, backgroundColor: "#fff", opacity: 0, padding: 14, paddingRight: "15%", paddingLeft: "15%", borderRadius: 10, marginTop: "-19%"}} onPress={()=> navigation.navigate("Register")}>
                            <Text style={style.buttonText}>Настоящая конпка</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={{zIndex: 2, position: "absolute", bottom: 0}}>
                    <Leaves/>
                </View>
            </View>
        </KeyboardAvoidingView>
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