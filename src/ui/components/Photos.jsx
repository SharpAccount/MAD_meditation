import React, { useContext, useEffect } from 'react';
import { FlatList, SafeAreaView, Text, Image, StyleSheet, Pressable } from "react-native";
import { Context } from "../../core/Context";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import getTime from "../../utils/GetTime";
import Plus from "./Plus";
import * as ImagePicker from "expo-image-picker";

const Photos = ({ navigation }) => {
    const [fontLoaded] = useFonts({
        "Alegreya Sans Medium": require("../../../assets/fonts/Alegreya Regular.ttf")
    });

    const { photos, setPhotos } = useContext(Context);

    useEffect(() => {
        const fetchData = async () => {
            const storedPhotos = await AsyncStorage.getItem('photos');
            if (storedPhotos.length > 1) {
                setPhotos(JSON.parse(storedPhotos));
            } else {
                const initialPhotos = [
                    { id: 0, image: require("../../../assets/photos/sunset.png"), postTime: getTime() },
                    { id: 1, image: require("../../../assets/photos/night.png"), postTime: getTime() },
                    { id: 2, image: require("../../../assets/photos/sunrise.png"), postTime: getTime() },
                    { id: 3, image: require("../../../assets/photos/fire.png"), postTime: getTime() },
                    { id: 4, image: null, postTime: null }
                ];
                setPhotos(initialPhotos);
                await AsyncStorage.setItem('photos', JSON.stringify(initialPhotos));
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        (async() => { setPhotos(JSON.parse(await AsyncStorage.getItem('photos')));})();
    }, [photos])

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            const postTime = getTime();
            const updatedPhotos = [...photos];
            let plusButton = updatedPhotos.pop();
            updatedPhotos.push({
                id: updatedPhotos.length,
                image: {uri: result.assets[0].uri },
                postTime: postTime,
            });
            plusButton.id = updatedPhotos.length;
            updatedPhotos.push(plusButton);
            setPhotos(updatedPhotos);
            await AsyncStorage.setItem('photos', JSON.stringify(updatedPhotos));
        }
    };

    const renderItem = ({ item, index }) => {
        const isLastItem = index === photos.length - 1;

        return (
            <Pressable
                style={isLastItem ? styles.plusButton : styles.photoButton}
                onPress={isLastItem ? pickImage : () => navigation.navigate('Photo', { imageId: item.id })}
            >
                {isLastItem ? (
                    <Plus />
                ) : (
                    <>
                        <Image source={item.image} style={styles.image} />
                        <Text style={styles.time}>{item.postTime}</Text>
                    </>
                )}
            </Pressable>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={photos}
                scrollEnabled={true}
                numColumns={2}
                keyExtractor={(item, idx) => idx.toString()}
                columnWrapperStyle={styles.columnWrapper}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: "5%",
        height: "60%",
    },
    columnWrapper: {
        gap: 20,
    },
    photoButton: {
        marginBottom: 18,
    },
    plusButton: {
        width: 153,
        height: 115,
        backgroundColor: "#6AAE72",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        marginBottom: 18,
    },
    image: {
        borderRadius: 20,
        height: 115,
        width: 153,
    },
    time: {
        position: "absolute",
        bottom: 23,
        marginLeft: 17,
        color: "#fff",
        fontFamily: "Alegreya Sans Medium",
        fontSize: 18,
    },
});

export default Photos;