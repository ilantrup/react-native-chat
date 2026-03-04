import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import React from "react";

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="(1services)">
        <Label>Ayuda</Label>
        <Icon sf={"lifepreserver"} drawable="ic_secure" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="(2chat)">
        <Label>Chats</Label>
        <Icon sf={"message"} drawable="ic_menu_message" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="(3location)">
        <Label>Ubicación</Label>
        <Icon sf={"location"} drawable="ic_menu_mylocation" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="(4settings)">
        <Label>Ajustes</Label>
        <Icon sf={"gear"} drawable="ic_menu_manage" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
