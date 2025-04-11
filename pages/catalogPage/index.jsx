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
import catalogData from "../../data/catalogData";

export const CatalogPage = () => {
  const data = catalogData
  const [isopen, setIsopen] = useState(false)
  console.log(data)

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/company-logo.png")} />
      <Text style={styles.title}>Каталог</Text>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Image
            style={styles.searchIcon}
            source={require("../../assets/icons/mignifyngglass.png")}
          />
          <TextInput
            placeholder="Пошук..."
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.filterButton} onPress={() => setIsopen(!isopen)}>
          <View style={{width: 200, height: 100, display: isopen ? "flex" : "none", position: 'absolute'}}>
            <Text>Some Text</Text>
          </View>
          <Image
            style={styles.filterIcon}
            source={require("../../assets/icons/filter.png")}
          />
          <Text style={styles.filterText}>Фільтри</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20
  },
  logo: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 74,
    height: 37
  },
  title: {
    paddingTop: 60,
    fontSize: 25,
    fontWeight: '600',
    color: '#000'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 20
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#9A75FF',
    borderWidth: 1,
    borderRadius: 19,
    paddingHorizontal: 10,
    height: 40,
    width: '70%',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: '100%',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#9A75FF',
    borderWidth: 1,
    borderRadius: 19,
    paddingHorizontal: 12,
    height: 40,
  },
  filterIcon: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  filterText: {
    fontSize: 16,
    color: '#000',
  }
});
