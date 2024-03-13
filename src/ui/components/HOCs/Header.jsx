import {SideBarButton} from "../sideBarButton";
import {Pressable, Text, View} from "react-native";
import Logo from "../logo";

const Header = () => {
    return (
        <View style={{display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center"}}>
            <SideBarButton/>
            <Logo width="43" height="49" color="#fff"/>
            <Pressable>
                <Text style={{fontFamily: "Alegreya Sans Medium", fontSize: 18, color: "#fff"}}>exit</Text>
            </Pressable>
        </View>
    )
}

export default Header;