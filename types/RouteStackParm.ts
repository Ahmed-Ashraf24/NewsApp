export type RouteStackParams = {
    Home:undefined,
    Details:{
        uuid?:String | null,
        title?:String|null,
        description?:String|null,
        content?:String | null,
        articleUrl?:String | null,
        imageUrl?:String|null,
    },
    fav:undefined,
}