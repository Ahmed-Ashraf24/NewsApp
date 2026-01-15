import AsyncStorage from '@react-native-async-storage/async-storage';
import { News } from "../types/News";

const FAVORITES_KEY = 'favorites';

export const getFavorites = async (): Promise<News[]> => {
    try {
        const favoriteNews = await AsyncStorage.getItem(FAVORITES_KEY);
        return favoriteNews ? JSON.parse(favoriteNews) : [];
    } catch (error) {
        console.error('Error getting favorites', error);
        return [];
    }
}

export const addToFavorite = async (newFavorite: News) => {
    try {
        const favoriteNews = await getFavorites();

        if (favoriteNews.find(item => item.uuid === newFavorite.uuid)) return;

        const updatedFavorites = [...favoriteNews, newFavorite];
        await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
        console.log("Successfully added to favorites");
    } catch (error) {
        console.error('Error adding to favorites', error);
    }
}

export const removeFromFavorite = async (news:News) => {
    try {
        const favoriteNews = await getFavorites();
        const updatedFavorites = favoriteNews.filter(item => item.uuid !== news.uuid);
        await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
        console.log("Successfully removed from favorites");
    } catch (error) {
        console.error('Error removing from favorites', error);
    }
}

export const checkIsFavorite = async (news: News): Promise<boolean> => {
    try {
        const favoriteNews = await getFavorites();
        return favoriteNews.some(item => item.uuid === news.uuid);
    } catch (error) {
        console.error('Error checking favorite', error);
        return false;
    }
}
