import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { PreviousBtn } from "../../components/previousPageBtn";

export const AimPage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/company-logo.png")}
      />
      <PreviousBtn />
      <Text style={styles.title}>Ціль:</Text>
      <Text style={styles.text}>
        Допомогти вразливим дітям подолати травму, отримати необхідні для
        досягнення успіху знання і навички та інтегруватися у суспільство. Ми
        переконані, що таким чином забезпечуємо дітей, яких підтримуємо – і в
        Україні, і в Малаві – шансами на самовизначення у дорослому житті.<br/> Щоб
        досягнути наших цілей і покращити життя та можливості вразливих дітей,
        ми ставимо дитину у центр всього, що робимо. Застосовуючи цілісний
        підхід, безпосередньо допомагаємо дитині покращити її становище. З
        підтримкою партнерів ми можемо творити значніші та стабільніші зміни у
        житті дитини.
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
    textAlign: "center",
    fontSize: 24,
    fontWeight: 600,
    marginTop: 30,
    marginBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
  },
  text: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: 600,
  },
});
