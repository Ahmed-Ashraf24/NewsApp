import {View,Image,Text,StyleSheet} from "react-native";
import React from 'react'

export const PublisherComponent:React.FC=()=>{
    return(
        <View style={styles.publisherRow}>
            <Image source={require("../assets/image.jpg") } style={{width:24,height:24 ,borderRadius:15}}/>
            <Text style={styles.publisherName}>Mr.publisher.may 12 2024</Text>
        </View>
    )
}
const styles = StyleSheet.create({

        publisherRow:{
            flexDirection: 'row',
            width:"80%",
            marginVertical:10,
            alignSelf:'center'
        },
    publisherName:{
        fontSize: 14,
        marginHorizontal:5,
        color:'gray',
        fontWeight: 'bold',
    }
})