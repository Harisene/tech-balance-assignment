import React from "react";
import { StyleProp, StyleSheet, Text, ViewStyle } from "react-native";
import PressableButton from "@components/Buttons/PressableButton";
import useTheme from "@hooks/useTheme";
import typography from "@themes/typography";
import { verticalScale, horizontalScale } from "@themes/metrics";
import { PrimaryButtonProps } from "@models/button.model";

export default function PrimaryButton({
  title,
  textStyle,
  style,
  ...rest
}: PrimaryButtonProps) {
  const { colors } = useTheme();
  const styles = getStyles();

  return (
    <PressableButton
      style={[styles.container, style as StyleProp<ViewStyle>]}
      {...rest}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </PressableButton>
  );

  function getStyles() {
    return StyleSheet.create({
      container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary.mute,
        width: "100%",
        height: verticalScale(52),
        borderRadius: horizontalScale(50),
      },
      text: {
        ...typography.paragraphSemiThree,
        color: colors.shades.black,
      },
    });
  }
}
