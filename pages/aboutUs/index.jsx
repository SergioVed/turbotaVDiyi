import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { PreviousBtn } from "../../components/previousPageBtn";

export const AboutUsPage = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/company-logo.png')}/>
      <PreviousBtn />
      <Text style={styles.title}>Громадська організація "Турбота в дії"</Text>
      <Text style={styles.text}>
        "Турбота в Дії" — це громадська організація, яка підтримує і турбується
        про соціально вразливих дітей в Україні понад 20 років.<br/><br/><br/> Мета
        організації: найуразливіші категорії дітей повинні отримувати підтримку,
        необхідну для їхнього благополуччя, розвитку потенціалу і досягнення
        успіху в самостійному житті.<br/><br/><br/> Основні напрямки діяльності:— створення і
        надання послуг та втілення програм, які формують життєву стійкість
        дітей-сиріт і дітей, позбавлених батьківського піклування, допомагають
        їм працевлаштуватися та жити продуктивним незалежним життям;— навчання і
        підтримка батьків-вихователів і прийомних батьків, щоб допомогти їм
        забезпечити для дітей, які перебувають під їхньою опікою, сприятливе для
        розвитку середовище;— співпраця з громадами, державними установами,
        неурядовими організаціями і компаніями з метою інформування,
        впровадження передових практик і збільшення кількості тих, кому
        допомагаємо.<br/><br/><br/> Приєднуйся!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 74,
    height: 37,
    position: 'absolute',
    top: -50
  },
  container: {
    width: '100%',
    width: "100%",
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: 600,
    marginTop: 30,
    marginBottom: 30,
    paddingLeft: 30,
    paddingRight: 30
  },
  text: {
    fontSize: 13,
    fontWeight: 600,
    paddingLeft: 30,
    paddingRight: 30
  }
});
