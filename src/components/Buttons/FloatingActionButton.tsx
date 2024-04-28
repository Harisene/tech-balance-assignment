import React from "react";
import { PressableProps, StyleSheet } from "react-native";
import useTheme from "@hooks/useTheme";
import PressableButton from "./PressableButton";
import { horizontalScale, moderateScale, verticalScale } from "@themes/metrics";

export default function FloatingActionButton(props: PressableProps) {
  const { colors } = useTheme();
  const styles = getStyles();

  return <PressableButton {...props} style={styles.container} />;

  function getStyles() {
    return StyleSheet.create({
      container: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        bottom: verticalScale(10),
        right: horizontalScale(10),
        backgroundColor: colors.secondary.default,
        width: moderateScale(60),
        height: moderateScale(60),
        borderRadius: horizontalScale(60),
      },
    });
  }
}
