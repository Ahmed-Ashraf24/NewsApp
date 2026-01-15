import { View, FlatList, Text, StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import { getFavorites } from '../storage/StorageHelper'
import { NewsListComponent } from '../components/NewsListComponent'
import {News} from "../types/News";
import {SafeAreaView} from "react-native-safe-area-context";

export default function FavoritesScreen({ navigation }: any) {
    const [favorites, setFavorites] = useState<News[]>([])

    useFocusEffect(
        useCallback(() => {
            getFavorites().then(  favNews=>
                setFavorites(favNews)
            )
        }, [])
    )

    if (favorites.length === 0) {
        return (
            <View style={styles.empty}>
                <Text>No favorites yet ❤️</Text>
            </View>
        )
    }

    return (
        <SafeAreaView>
        <FlatList
            data={favorites}
            renderItem={({ item }) => (
                <NewsListComponent
                    title={item.title}
                    imageUrl={item.imageUrl}
                    onPress={() =>
                        navigation.navigate('Details', { ...item })
                    }
                />
            )}
        />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    empty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
