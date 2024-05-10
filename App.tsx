import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { CameraView } from "expo-camera";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Pagina Home</Text>
    </View>
  );
}

function Contatos() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Contatos</Text>
    </View>
  );
}

function Atendimentos() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Atendimentos</Text>
    </View>
  );
}
function Atividade() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Atividade</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="house-chimney" size={24} color={color} />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="user" size={24} color={color} />
            ),
          }}
          name="Contatos"
          component={Contatos}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="sack-dollar" size={24} color={color} />
            ),
          }}
          name="Atendimentos"
          component={Atendimentos}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="calendar-check" size={24} color={color} />
            ),
          }}
          name="Atividade"
          component={Atividade}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
