import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import useTheme from "@hooks/useTheme";

export default function Loader() {
  const { colors } = useTheme();
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.secondary.default} />
    </View>
  );

  function getStyles() {
    return StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
    });
  }
}
