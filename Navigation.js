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
          elevation: 0,
          backgroundColor: "#fff",
          height: 100,
          shadowColor: "#000",   // Цвет тени (iOS)
          shadowOffset: {
            width: 0,
            height: -5,          // <-- Вверх, а не вниз!
          },
          shadowOpacity: 0.2,
          shadowRadius: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                height: 60,
                width: 60,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
                top: 30,  
                backgroundColor: focused ? "#9EAEFF" : "white"
              }}
            >
              <Image
                source={require("./assets/icons/Home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#fff" : "#748c94",
                }}
              />
              {focused ? <></> : <Text>Головна</Text>}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Catalog"
        component={ImportantPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                height: 60,
                width: 60,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
                top: 30,
                backgroundColor: focused ? "#9EAEFF" : "white"
              }}
            >
              <Image
                source={require("./assets/icons/Catalog.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#fff" : "#748c94",
                  backgroundColor: focused ? "#9EAEFF" : "white"
                }}
              />
              {focused ? <></> : <Text>Важливе</Text>}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={CatalogPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                height: 60,
                width: 60,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
                top: 30,
                backgroundColor: focused ? "#9EAEFF" : "white"
              }}
            >
              <Image
                source={require("./assets/icons/Important.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#fff" : "#748c94",
                }}
              />
              {focused ? <></> : <Text>Каталог</Text>}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Important"
        component={ProfilePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                height: 60,
                width: 60,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
                top: 30,
                backgroundColor: focused ? "#9EAEFF" : "white"
              }}
            >
              <Image
                source={require("./assets/icons/Profile.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#fff" : "#748c94",
                }}
              />
              {focused ? <></> : <Text>Профіль</Text>}
            </View>
          ),
        }}
      />
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

