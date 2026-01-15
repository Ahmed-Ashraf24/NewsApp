import React, {useEffect} from "react";
import {NativeStackScreenProps} from "react-native-screens/native-stack";
import {RouteStackParams} from "../types/RouteStackParm";
import {Text, StyleSheet, Image, View, TouchableOpacity} from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context";
import {News} from "../types/News";
import {addToFavorite, checkIsFavorite, removeFromFavorite} from "../storage/StorageHelper";
type Props = NativeStackScreenProps<RouteStackParams, 'Details'>;
export default function DetailsScreen({ route }: Props){
    const news:News = route.params;
    const [isFavorite, setIsFavorite] = React.useState(false);
    useEffect(()=>{
        checkIsFavorite(news).then(isFavorite=>
            setIsFavorite(isFavorite)
        )
    },[])
    return(
        <>
            <SafeAreaView>
             <View style={styles.box}>
                 <Image source={news.imageUrl? {uri:news.imageUrl} : require("../assets/placeholder.png") } style={styles.image} />
                 <TouchableOpacity  style={styles.imageContainer} onPress={()=> {
                     if(isFavorite){
                         removeFromFavorite(news).then(()=>
                             setIsFavorite(false)
                         )
                     }
                     else {
                         addToFavorite(news).then(() =>
                             setIsFavorite(true)
                     )
                     }
                     }}>
                 <Image   source={isFavorite ? require('../assets/filledfav.png') : require('../assets/fav.png')}
                          style={styles.icons}/>
                 </TouchableOpacity>
                 </View>
                 <Text style={styles.content}>{news.title}</Text>
            <Text>{news.content}</Text>
                <Text>for mor details : {news.articleUrl}</Text>
            </SafeAreaView>
            </>
    )
}
const styles = StyleSheet.create({
    image: {
        width: '100%',
        aspectRatio: 16 / 9,
        borderStartStartRadius:15,
        borderEndStartRadius:10,
        overflow: 'hidden',

    },
    content: {
        fontSize:30,
        fontWeight:'bold',
    },
    icons: {
        width: 20,
        height: 20,
        tintColor: 'white',
        margin:5
    },
    box: {
        position: 'relative', // ⬅ parent = Box
    },
    imageContainer: {
        position: 'absolute',
        alignSelf:'flex-end',

    }
})