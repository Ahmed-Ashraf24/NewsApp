import React from 'react'
import {View, StyleSheet, Text, Image, Linking, TouchableOpacity} from "react-native";
import {PublisherComponent} from "./publisherComponent";
import {News} from "./ComponentTypes";


export const NewsListComponent: React.FC<News> = (news: News) => {
    return (
        <TouchableOpacity onPress={news.onPress}>
        <View style={styles.componentContainer}>
            <View style={styles.innerVerticalContainer}>
                <Text numberOfLines={2}
                      ellipsizeMode="tail" style={styles.title}>{news.title}</Text>
                <View style={styles.publisherRow}>
                    <Image source={require("../assets/image.jpg")} style={{width: 24, height: 24, borderRadius: 15}}/>
                    <Text style={styles.publisherName}>Mr.publisher.may 12 2024</Text>
                </View>
            </View>
            <Image source= {news.imageUrl? {uri:news.imageUrl} : require("../assets/placeholder.png")} style={{width: 70, height: 70, borderRadius: 15}}/>
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    componentContainer: {
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 12,
        justifyContent: "space-between",

    },
    innerVerticalContainer: {
        flex: 1,
        marginRight: 10,
    },
    title: {
        width: "80%",
        fontSize: 25,
        marginTop: 15,
        lineHeight: 30,

    },
    publisherRow: {
        flexDirection: 'row',
        width: "80%",
        marginVertical: 10,
    },
    publisherName: {
        fontSize: 14,
        marginHorizontal: 5,
        color: 'gray',
        fontWeight: 'bold',
    }
})