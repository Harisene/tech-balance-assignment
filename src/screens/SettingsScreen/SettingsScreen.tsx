import React from "react";
import { View, Text } from "react-native";
import useTheme from "@hooks/use-theme";

export default function SettingsScreen() {
  const { colors } = useTheme();

  return (
    <View>
      <Text style={{ color: colors.shades.black }}>SettingsScreen</Text>
    </View>
  );
}
