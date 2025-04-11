import { StyleSheet, Text, View, Image, FlatList, SafeAreaView } from "react-native";

const Item = ({ name, background, height, width }) => {
  return (
    <Text
      style={{
        backgroundColor: background,
        height: height,
        width: width,
        borderRadius: 10,
        textAlign: "center",
        alignContent: "center",
        fontSize: 14,
        fontWeight: 700,
        marginTop: 15
      }}
    >
      {name}
    </Text>
  );
};

export const HomePage = () => {
  const data = [
    { name: "ПРО НАС", backgroundColor: "#FF8075", height: 40, width: 280 },
    { name: "МІСІЯ", backgroundColor: "#EFEC50", height: 40, width: 280 },
    { name: "ЦІЛЬ", backgroundColor: "#9EAEFF", height: 40, width: 280 },
    { name: "СОЦІАЛЬНІ МЕРЕЖІ", backgroundColor: "#B4FF96", height: 40, width: 280,}
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Волонтерити може кожен</Text>
      <Image style={styles.logo} source={require("../../assets/company-logo.png")} />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item
            name={item.name}
            background={item.backgroundColor}
            height={item.height}
            width={item.width}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#000",
    fontSize: 20,
    fontWeight: 700,
    paddingTop: 60
  },
  item: {
    height: 40,
    width: 280,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  logo: {
    marginTop: 15
  }
});
