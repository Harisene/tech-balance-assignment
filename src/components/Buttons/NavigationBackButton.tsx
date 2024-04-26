import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import BackButton from "./BackButton";
import { horizontalScale } from "@themes/metrics";

interface Props {
  onPress: () => void;
}

export default function NavigationBackButton(props: Props) {
  return (
    <View style={styles.container}>
      <BackButton onPress={props.onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: Platform.OS === "android" ? horizontalScale(20) : 0,
  },
});
