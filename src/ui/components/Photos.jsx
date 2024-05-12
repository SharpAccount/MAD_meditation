import React, {useContext} from 'react';
import {FlatList, SafeAreaView, View, Text, Image, StyleSheet} from "react-native";
import {Context} from "../../core/Context";
import {useFonts} from "expo-font";

const Photos = () => {

    const [fontLoaded] = useFonts({
        "Alegreya Sans Medium": require("../../../assets/fonts/AlegreyaSans Medium.ttf")
    })

    const {photos, setPhotos} = useContext(Context);
    return (
        <SafeAreaView>
            <FlatList data={photos}
                      numColumns={2}
                      keyExtractor={(item, idx) => idx.toString()}
                      columnWrapperStyle={{gap: 20}}
                      renderItem={({item}) => {
                          console.log(item)
                          return  (
                                <View style={{marginBottom: 18}}>
                                    <Image source={item.image} style={{borderRadius: 20, height: 115, width: 153}}/>
                                    <Text style={style.time}>{item.postTime}</Text>
                                </View>
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