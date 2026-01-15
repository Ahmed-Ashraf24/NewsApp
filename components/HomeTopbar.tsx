import {Component} from "react";
import {Text, View, StyleSheet, Image,TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'
import {HomeTopbarProps} from "./ComponentTypes";

export const HomeTopbar: React.FC<HomeTopbarProps> = ({onPress}) => {
    return (
        <View >
            <SafeAreaView style={styles.topbar}>
                <Text style={styles.text}>News App</Text>
                <TouchableOpacity onPress={onPress}>
                <Image source={require('../assets/fav.png')} style={styles.icons}/>
                </TouchableOpacity>
                </SafeAreaView>
        </View>
    )
}
const styles = StyleSheet.create({
topbar:{
    flexDirection: 'row',
    verticalAlign : 'middle',
    alignItems: 'center',
    padding: 20,
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#e7ecf8"
},
    text: {
        fontSize: 24,
        alignSelf: "center",
        justifyContent: "center",


    },
    icons: {
        width: 20,
        height: 20,
    }
})
