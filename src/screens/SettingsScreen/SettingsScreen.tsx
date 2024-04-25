import React from "react";
import { View, Text, StyleSheet } from "react-native";
import useTheme from "@hooks/useTheme";
import typography from "@themes/typography";
import { horizontalScale } from "@themes/metrics";

export default function SettingsScreen() {
  const { colors } = useTheme();

  const styles = getStyles();

  return (
    <View>
      <Text style={styles.text}>SettingsScreen</Text>
    </View>
  );

  function getStyles() {
    return StyleSheet.create({
      text: {
        ...typography.headingOne,
        color: colors.tbPrimary.default,
        marginLeft: horizontalScale(40)
      },
    });
  }
}

