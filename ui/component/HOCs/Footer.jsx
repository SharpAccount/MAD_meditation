import ProfileIcon from "../ProfileIcon";
import {View} from "react-native";
import Logo from "../logo";
import Sound from "../Sound";

const Footer = () => {
    return (
        <View style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Logo width="19" height="20" color="#92999a"/>
            <Sound/>
            <ProfileIcon/>
        </View>
    )
}

export default Footer;