import React, {useContext, useEffect} from 'react';
import {FlatList, SafeAreaView, Text, Image, StyleSheet, Pressable} from "react-native";
import {Context} from "../../core/Context";
import {useFonts} from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import getTime from "../../utils/GetTime";
import Plus from "./Plus";
import * as ImagePicker from "react-native-image-picker";

const Photos = ({navigation}) => {

    const [fontLoaded] = useFonts({
        "Alegreya Sans Medium": require("../../../assets/fonts/AlegreyaSans Medium.ttf")
    })

    const {photos, setPhotos} = useContext(Context);

    useEffect(() => {
        const fetchData = async () => {
            const updatedPhotos = photos.map(photo => ({
                ...photo,
                postTime: getTime(),
            }));
            setPhotos(updatedPhotos);
            await AsyncStorage.setItem('photos', JSON.stringify(updatedPhotos));
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async() => {
            const storedPhotos = await AsyncStorage.getItem('photos');
            setPhotos(JSON.parse(storedPhotos));
        }
        fetchData();
    }, [photos])


    const pickImage = async() => {
        await ImagePicker.launchImageLibrary(
            {
                mediaType: 'photo'
            },
            response => {
                if (response.didCancel) {
                    console.log('Пользователь отменил выбор изображения');
                } else if (response.error) {
                    console.log('Ошибка при выборе изображения:', response.error);
                } else {
                    console.log('Выбранное изображение:', response);
                    const chosenPhoto = {
                        id: photos[photos.length-1].id,
                        Image: response,
                        postTime: getTime()
                    }
                    setPhotos([...photos, chosenPhoto]);
                }
            }
        );
    }
    const AddButton = () => {
        return (
            <Pressable style={{width: 153, height: 115, backgroundColor: "#6AAE72", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 20}}
                        onPress={pickImage}>
                <Plus/>
            </Pressable>
        );
    };

    return (
        <SafeAreaView style={{ marginTop: "5%", height: "60%" }}>
            <FlatList
                data={photos}
                scrollEnabled={true}
                numColumns={2}
                keyExtractor={(item, idx) => idx.toString()}
                columnWrapperStyle={{ gap: 20 }}
                ListFooterComponent={AddButton}
                renderItem={({ item }) => {
                    return (
                        <Pressable style={{ marginBottom: 18 }} onPress={() => navigation.navigate("Photo", { imageId: item.id })}>
                            <Image source={item.image} style={{ borderRadius: 20, height: 115, width: 153 }} />
                            <Text style={style.time}>{item.postTime}</Text>
                        </Pressable>
                    );
                }}
            />
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    time: {
        position: "absolute",
        bottom: 23,
        marginLeft: 17,
        color: "#fff",
        fontFamily: "Alegreya Sans Medium",
        fontSize: 18,
    }
})

export default Photos;