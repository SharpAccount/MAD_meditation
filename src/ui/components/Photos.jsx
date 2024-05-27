import React, {useContext, useEffect} from 'react';
import {FlatList, SafeAreaView, Text, Image, StyleSheet, Pressable} from "react-native";
import {Context} from "../../core/Context";
import {useFonts} from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import getTime from "../../utils/GetTime";
import Plus from "./Plus";
import * as ImagePicker from "expo-image-picker";

const Photos = ({navigation}) => {

    const [fontLoaded] = useFonts({
        "Alegreya Sans Medium": require("../../../assets/fonts/AlegreyaSans Medium.ttf")
    })

    const {photos, setPhotos} = useContext(Context);

    useEffect(() => {
        const fetchData = async () => {
            const updatedPhotos = updatePhotos();
            if (updatedPhotos[updatedPhotos.length-1].postTime !== null) {
                updatedPhotos[updatedPhotos.length-1].postTime = ({
                    id: updatedPhotos.length,
                    image: null,
                    postTime: null
                });
            }
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

    const updatePhotos = () => {
        return photos.map(photo => ({
            ...photo,
            postTime: getTime(),
        }));
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            //it`ll be fixed
            // const plusButton = photos[photos.length-1];
            // const postTime = getTime();
            // const updatedPhotos = photos;
            // updatedPhotos[updatedPhotos.length-1] = {
            //     id: updatedPhotos.length,
            //     image: result.assets[0].uri,
            //     postTime: postTime,
            // }
            // updatedPhotos.push(plusButton);
            // setPhotos(updatedPhotos);
            // await AsyncStorage.setItem('photos', JSON.stringify(updatedPhotos));
        }
    };

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
                renderItem={({ item }) => {
                    const isLastItem = item.id === (photos.length - 1);

                    const button = isLastItem ? (
                        <Pressable style={{width: 153, height: 115, backgroundColor: "#6AAE72", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 20}}
                                   onPress={pickImage}>
                            <Plus/>
                        </Pressable>
                    ) : (
                        <Pressable
                            style={{ marginBottom: 18 }}
                            onPress={isLastItem ? pickImage : () => navigation.navigate('Photo', { imageId: item.id })}>
                            <Image source={item.image} style={{ borderRadius: 20, height: 115, width: 153 }} />
                            <Text style={style.time}>{item.postTime}</Text>
                        </Pressable>
                    )

                    return (
                        <>{button}</>
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