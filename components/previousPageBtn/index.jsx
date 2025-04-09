import { StyleSheet, Pressable, Text, View, Image, FlatList } from "react-native";

export const PreviousBtn = ({onPress}) => {
    return(
        <Pressable onPress={onPress} style={({pressed}) => pressed ? styles.pressed : styles.notPressed}>
            <Image style={styles.image} source={require('../../assets/previousBtn.png')}/>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    pressed: {
        opacity: 0.8,
    },
    notPressed: {
        opacity: 1,
    },
    image: {
        height: 16,
        width: 10
    }
})