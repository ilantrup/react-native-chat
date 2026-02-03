import React from "react";
import { withLayoutContext } from "expo-router";
import {
  createNativeBottomTabNavigator,
  NativeBottomTabNavigationOptions,
  NativeBottomTabNavigationEventMap,
} from "@bottom-tabs/react-navigation";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";

const BottomTabNavigator = createNativeBottomTabNavigator().Navigator;

const Tabs = withLayoutContext<
  NativeBottomTabNavigationOptions,
  typeof BottomTabNavigator,
  TabNavigationState<ParamListBase>,
  NativeBottomTabNavigationEventMap
>(BottomTabNavigator);

export default function TabLayout() {
  return (
    <Tabs
      translucent={true}
    >
      <Tabs.Screen
        name="(1services)"
        options={{
          title: "Todos los servicios",
          tabBarLabel: "Ayuda",
          tabBarIcon: () => ({ sfSymbol: "lifepreserver" }),
        }}
      />
      <Tabs.Screen
        name="(2chat)"
        options={{
          title: "Todos los chats",
          tabBarLabel: "Chats",
          tabBarIcon: () => ({ sfSymbol: "message" }),
        }}
      />
      <Tabs.Screen
        name="(3location)"
        options={{
          title: "Ubicación",
          tabBarIcon: () => ({ sfSymbol: "location" }),
        }}
      />
    </Tabs>
  );
}
