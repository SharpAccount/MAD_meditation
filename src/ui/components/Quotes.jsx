import React, {useContext} from 'react';
import {Image, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {Context} from "../../core/Context";

const Quotes = () => {

    const {quotes} = useContext(Context);

    return (
        <ScrollView style={{marginTop: "8%", height: "54%"}}>
            {quotes.map((el, idx) => (
                <View key={idx} style={{backgroundColor: "#F7F3F0", display: "flex", flexDirection: "row", paddingHorizontal: 30, paddingVertical: 22, borderRadius: 20, marginBottom: 26}}>
                    <View style={{flex:4}}>
                        <Text style={{fontSize: 25, fontFamily: "Alegreya Medium"}}>{el.title}</Text>
                        <Text style={{fontSize: 15, fontFamily: "Alegreya Sans Medium"}}>{el.description}</Text>
                        <Pressable style={style.quoteButton}>
                            <Text style={{fontFamily: "Alegreya Sans Medium", color: "#fff"}}>подбробнее</Text>
                        </Pressable>
                    </View>
                    <View style={{flex: 3}}>
                        <Image source={{uri: el.image}} style={{height: 130, width: 166, objectFit: "contain"}}></Image>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const style = StyleSheet.create({
    quoteButton: {
        backgroundColor: "#253334",
        paddingHorizontal: 31,
        paddingTop: 9,
        paddingBottom: 12,
        width: 138,
        borderRadius: 10,
        marginTop: 16,
    }
})

export default Quotes;