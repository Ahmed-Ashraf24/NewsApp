import React from 'react'
import {Image, View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {PublisherComponent} from "./publisherComponent";
import {bannerNews} from "./ComponentTypes";


export const    BannerCard: React.FC<bannerNews> = (props: bannerNews) => {

    return (
        <>
            <TouchableOpacity onPress={props.onPressed}>
            <View style={styles.container}>
                {props.imageUrl && (
                    <Image
                        source={
                            props.imageUrl
                                ? { uri: props.imageUrl }
                                : require('../assets/placeholder.png')
                        }
                        style={styles.image}
                    />
                )}                <Text style={styles.title}>{props.title}</Text>
                <PublisherComponent/>
            </View>
            </TouchableOpacity>
        </>

    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    publisherRow:{
        flexDirection: 'row',
        width:"80%",
        marginVertical:10,
        alignSelf:'center'
    },
    image: {
        width: "80%",
        height: 200,
        borderRadius: 15,
        overflow: 'hidden',
    },
    title: {
        width: "75%",
        fontSize: 25,
        marginTop: 15,
        lineHeight: 30,
        alignSelf: 'center',
    },


})