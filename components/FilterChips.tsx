import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {useState} from "react";
import {FilterChipsProps} from "./ComponentTypes";


export const FilterChips = ({props}: FilterChipsProps) => {
    const [selected,setSelected]=useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <View style={styles.container}>
            {props.map((filterItem, index) => (
                <TouchableOpacity onPress={()=> {
                    setSelectedIndex(index);
                    setSelected(selectedIndex == index);
                    console.log(selectedIndex)
                }}
                >
                <View key={index} style={{
                    borderColor: "gray",
                    borderWidth: .2,
                    borderRadius: 100,
                    backgroundColor:index==selectedIndex ? '#e7ecf8' : '#00000000',
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Text style={styles.text}>{filterItem.filterChipsName}</Text>
                </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 14,
    },
    text:{
        paddingVertical: 10,
        paddingHorizontal:20,
        fontWeight:"bold",
    }
});


