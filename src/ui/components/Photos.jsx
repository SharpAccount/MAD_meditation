import React, {useContext, useEffect} from 'react';
import {FlatList, SafeAreaView, Text, Image, StyleSheet, Pressable} from "react-native";
import {Context} from "../../core/Context";
import {useFonts} from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import getTime from "../../utils/GetTime";

const Photos = () => {

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
            const storedData = await AsyncStorage.getItem('photos');
            setPhotos(JSON.parse(storedData));
            // if (storedData) {
            // } else {
            //
            // }
        };
        fetchData();
    }, []);

    return (
        <SafeAreaView style={{marginTop: "5%"}}>
            <FlatList data={photos}
                      numColumns={2}
                      keyExtractor={(item, idx) => idx.toString()}
                      columnWrapperStyle={{gap: 20}}
                      renderItem={({item}) => {
                          return  (
                                <Pressable style={{marginBottom: 18}}>
                                    <Image source={item.image} style={{borderRadius: 20, height: 115, width: 153}}/>
                                    <Text style={style.time}>{item.postTime}</Text>
                                </Pressable>
                              )
                      }}/>
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