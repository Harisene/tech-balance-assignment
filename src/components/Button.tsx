import React from "react";
import { ButtonType, ButtonProps } from "@models/button";
import { StyleSheet } from "react-native";
import PrimaryButton from "./PrimaryButton";
import ActionButton from "./ActionButton";
import useTheme from "@hooks/useTheme";
import { Theme } from "@models/theme";

export default function Button(props: ButtonProps) {
  const { colors } = useTheme();

  const styles = getStyles(colors);

  switch (props.type) {
    case ButtonType.PRIMARY:
      return (
        <PrimaryButton
          textStyle={[styles.text, props.textStyle]}
          containerStyle={[props.containerStyle, styles.container]}
          onPress={props.onPress}
          title={props.title}
        />
      );
    case ButtonType.ACTION:
      return (
        <ActionButton
          containerStyle={[props.containerStyle, styles.container]}
          textStyle={[props.textStyle, styles.text]}
          onPress={props.onPress}
          title={props.title}
          renderIcon={props.renderIcon}
        />
      );
    default:
      return null;
  }

  function getStyles(colors: Theme) {
    return StyleSheet.create({
      container: {
        justifyContent: "center",
        alignItems: "center",
      },
      text: {
        color: colors.shades.black,
      },
    });
  }
}
