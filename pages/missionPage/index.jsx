import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { PreviousBtn } from "../../components/previousPageBtn";

export const MissionPage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/company-logo.png")}
      />
      <PreviousBtn />
      <Text style={styles.title}>Місія:</Text>
      <Text style={styles.text}>
        Наше бачення – найуразливіші категорії дітей повинні отримувати
        підтримку, необхідну для їхнього благополуччя, розвитку потенціалу і
        досягнення успіху в самостійному житті Ми взяли  на себе місію залучати
        людей, надавати послуги та створювати можливості, щоб допомогти
        дітям-сиротам та дітям, позбавленим батьківського піклування, змінити
        своє життя на краще.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 74,
    height: 37,
    position: "absolute",
    top: -50,
  },
  container: {
    width: "100%",
    width: "100%",
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 600,
    marginTop: 30,
    marginBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
  },
  text: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 600,
  },
});
