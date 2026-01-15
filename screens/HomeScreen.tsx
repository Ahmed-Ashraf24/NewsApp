import {View, StyleSheet, Text, FlatList} from 'react-native';
import {HomeTopbar} from '../components/HomeTopbar'
import {FilterChips} from '../components/FilterChips'
import {BannerCard} from "../components/BannerCard";
import {NewsListComponent} from "../components/NewsListComponent";
import {useEffect, useState} from "react";
import {NativeStackScreenProps} from "react-native-screens/native-stack";
import {RouteStackParams} from "../types/RouteStackParm";
import {NewsData, NewsResponse} from "../types/NewsResponse";
import {apiKey} from "../env";

const apiUrl = `https://gnews.io/api/v4/top-headlines?token=${apiKey}&lang=en&country=us&max=10`;

async function getNewsData(): Promise<NewsResponse> {
    const response = await fetch(apiUrl)
    const data = await response.json();
    console.log(data);
    const newsData: NewsData[] = data.articles.map((item: any) => ({
        uuid: item.id,
        title: item.title,
        description: item.description || '',
        articleUrl: item.url||'',
        content:item.content||'',
        image_url: item.image || '',
    }));
    console.log(newsData);
    return {newsList: newsData};
}


type Props = NativeStackScreenProps<RouteStackParams, 'Home'>;
export default function HomeScreen({navigation}: Props) {
    const [newsData, setNewsData] = useState<NewsResponse | null>(null);
    useEffect(() => {
        const data = getNewsData();
        data.then(newsData =>
            setNewsData(newsData)
        ).catch(console.error);
        console.log(newsData);
    }, [])
    return (
        <View style={styles.container}>
            <HomeTopbar onPress={ ()=>{
                navigation.navigate('fav');
            }}/>

            <FlatList data={newsData?.newsList.map(newsData => ({
                    uuid: newsData.uuid,
                    imageUrl: newsData.image_url,
                content: newsData.content,
                articleUrl: newsData.articleUrl,
                    title: newsData.title, description: newsData.description,
                })
            )}
                      renderItem={news => <NewsListComponent
                              title={news.item.title}
                              imageUrl={news.item.imageUrl}
                          onPress={() => {
                              navigation.navigate("Details", {
                                  uuid:news.item.uuid,
                                  title: news.item.title,
                                  content:news.item.content,
                                  articleUrl:news.item.articleUrl,
                                  description: news.item.description,
                                  imageUrl: news.item.imageUrl
                              })
                          }}/>}
                      ListHeaderComponent={
                          <>
                              <BannerCard imageUrl={newsData?.newsList[0].image_url} title={newsData?.newsList[0].title}
                                          onPressed={() => {
                                              navigation.navigate("Details", {
                                                  uuid:newsData?.newsList[0].uuid,
                                                  title: newsData?.newsList[0].title,
                                                  imageUrl: newsData?.newsList[0].image_url,
                                                  content:newsData?.newsList[0].content,
                                                  articleUrl:newsData?.newsList[0].articleUrl,
                                                  description: newsData?.newsList[0].description
                                              })
                                          }}/>

                          </>
                      }

            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})