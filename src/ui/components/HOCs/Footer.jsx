import ProfileIcon from "../ProfileIcon";
import {Pressable, View} from "react-native";
import Logo from "../logo";
import Sound from "../Sound";

const Footer = ({navigation}) => {
    return (
        <View style={{width: "60%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignSelf: "center"}}>
            <Pressable onPress={() => (navigation.navigate("Main"))}><Logo width="20" height="20" color="#92999a"/></Pressable>
            <Pressable><Sound/></Pressable>
            <Pressable onPress={() => navigation.navigate("Profile")}><ProfileIcon/></Pressable>
        </View>
    )
}

export default Footer;