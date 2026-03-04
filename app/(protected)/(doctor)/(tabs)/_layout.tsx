import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import React from "react";

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="(1patients)">
        <Label>Pacientes</Label>
        <Icon sf={"person.fill"} drawable="ic_person" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
