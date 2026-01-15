export type bannerNews = {
    imageUrl?: String|null,
    title?: String|null,
    onPressed:VoidFunction,
}
export type FilterChip = {
    filterChipsName: String
}
export type FilterChipsProps = {
    props: FilterChip[];
}
export type HomeTopbarProps = {
    onPress: () => void;
};
export type News = {
    imageUrl?: String| null,
    title?: String|null,
    onPress:  VoidFunction,
}