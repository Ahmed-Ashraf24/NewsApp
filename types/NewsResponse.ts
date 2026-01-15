export type NewsData = {
    uuid: String,
    title: String,
    description: String,
    articleUrl:String,
    content:String,
    image_url: String,

}
export type NewsResponse = {
    newsList: NewsData[]
}