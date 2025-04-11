import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

export const CatalogElement = ({title, backgroundColor, img}) => {

    return(
        <View style={[styles.container, {backgroundColor: backgroundColor}]}>
            <Text style={styles.text}>{title}</Text>
            <Image source={require(img)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 150,
        display: 'flex',
        justifyContent: "space-around",
        alignItems: 'center'
    },
    text: {
        fontSize: 26,
        fontWeight: 600,
        color: '#000'
    },
    img: {
        width: 100
    }
})