import React from "react";
import useTheme from "@hooks/useTheme";
import { horizontalScale, moderateScale, verticalScale } from "@themes/metrics";
import { View, StyleSheet, ViewProps } from "react-native";

interface Props extends ViewProps {}

export default function Card(props: Props) {
  const { colors } = useTheme();
  const styles = getStyles();

  return <View style={[styles.container, props.style]}>{props.children}</View>;

  function getStyles() {
    return StyleSheet.create({
      container: {
        paddingVertical: horizontalScale(8),
        paddingHorizontal: horizontalScale(16),
        borderRadius: horizontalScale(10),
        backgroundColor: colors.shades.white,
        shadowColor: colors.shades.black,
        shadowOffset: {
          width: horizontalScale(2),
          height: verticalScale(2),
        },
        shadowOpacity: moderateScale(0.05),
        shadowRadius: verticalScale(0.5),
        elevation: verticalScale(5),
      },
    });
  }
}
