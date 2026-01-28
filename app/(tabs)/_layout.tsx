import "@/global.css";
import React from "react";

import { SendIcon } from "@/components/Icons";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";

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
  const colorScheme = useColorScheme();

  return (
    <Tabs
      translucent={true}
      /*     screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: useClientOnlyValue(false, true),
        tabBarShowLabel: true,
      }}*/
    >
      <Tabs.Screen
        name="(chat)"
        options={{
          title: "Todos los chats",
          tabBarLabel: "Chats",
          //tabBarIcon: ({ color }) => <SendIcon color={color} />,
          tabBarIcon: () => ({ sfSymbol: "message" }),
        }}
      />
      <Tabs.Screen
        name="chatLocation"
        options={{
          title: "Location",
          //tabBarIcon: ({ color }) => <SendIcon color={color} />,
          tabBarIcon: () => ({ sfSymbol: "location" }),
        }}
      />
    </Tabs>
  );
}
