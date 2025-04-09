import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, SafeAreaView, View, Text } from "react-native";
import { HomePage } from "./pages/homePage";
import { CatalogPage } from "./pages/catalogPage";
import { ProfilePage } from "./pages/profilePage";
import { ImportantPage } from "./pages/importantPage";

const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: '#fff',
          height: 90
        },
      }}
    >
      <Tab.Screen name="Home" component={HomePage} options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 10, transform: [{translateY: focused ? -10 : 0}]}}>
            <Image source={require("./assets/icons/Home.png")}
            
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: focused ? '#e32f45' : '#748c94',
            }}/>
            <Text>Home</Text>
          </View>
        )
      }}/>
      <Tab.Screen name="Catalog" component={CatalogPage} />
      <Tab.Screen name="Profile" component={ProfilePage} />
      <Tab.Screen name="Important" component={ImportantPage} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ width: "100%", height: "100%" }}>
        <TabGroup />
      </SafeAreaView>
    </NavigationContainer>
  );
}