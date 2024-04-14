import React, {useContext} from 'react';
import {Image, ScrollView, Text, View, StyleSheet} from "react-native";
import {Context} from "../../core/Context";

const Feelings = () => {

    const {feelings} = useContext(Context);

    return (
        <ScrollView horizontal={true} contentContainerStyle={style.feelings}>
            {feelings.map((el, idx) => (
                <View key={idx} style={style.itemContainer}>
                    <View style={style.container}>
                        <View style={{ maxWidth: 35, maxHeight: 35 }}>
                            <Image source={{ uri: el.image }} style={{ width: 37, height: 35, flex: 1 }} />
                        </View>
                    </View>
                    <Text style={{ color: "#ffffff", fontFamily: "Alegreya Sans Regular", fontSize: 12, textAlign: "center" }}>{el.title}</Text>
                </View>
            ))}
        </ScrollView>

    );
};

const style = StyleSheet.create({
    feelings: {
        display: "flex",
        flexDirection: "row",
        marginTop: "7%",
    },
    itemContainer: {
        marginRight: 10,
    },
    container:  {
        width: 62,
        height: 65,
        borderRadius: 20,
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    }
})

export default Feelings;