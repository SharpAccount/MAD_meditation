import React, {useContext} from 'react';
import {Image, Pressable, Text, View, StyleSheet} from "react-native";
import {Context} from "../../core/Context";
import {useFonts} from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PhotoPage = (props) => {

    const [fontLoaded] = useFonts({
        "Alegreya Sans Medium": require("../../../assets/fonts/AlegreyaSans Medium.ttf")
    })

    const deletePhoto = async () => {
        let updatedPhotos = photos.filter(el => el.id !== imageId);
        updatedPhotos = updatedPhotos.map((photo, index) => {
            photo.id = index;
        });
        console.log(updatedPhotos,"\n", photos)
        setPhotos(updatedPhotos);
        props.navigation.goBack();
        await AsyncStorage.setItem("photos", JSON.stringify(photos));
    }

    const {imageId} = props.route.params;

    const { photos, setPhotos } = useContext(Context);

    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: "#253334", justifyContent: "center", alignItems: "center" }}>
            <Image source={ photos[imageId].image } style={{width: "100%", height: "100%", objectFit: "contain"}}/>
            <View style={{position: "absolute", bottom: "5%", display: "flex", flexDirection: "row", columnGap: 114}}>
                <Pressable onPress={deletePhoto}>
                    <Text style={style.button}>удалить</Text>
                </Pressable>
                <Pressable onPress={props.navigation.goBack}>
                    <Text style={style.button}>закрыть</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default PhotoPage;

const style = StyleSheet.create({
    button: {
        fontFamily: "Alegreya Sans Medium",
        color: "white",
        fontSize: 20
    }
})