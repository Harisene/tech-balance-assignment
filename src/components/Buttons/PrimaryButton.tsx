import React from "react";
import {
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";
import PressableButton from "@components/Buttons/PressableButton";
import useTheme from "@hooks/useTheme";
import typography from "@themes/typography";

interface Props extends PressableProps {
  title: string;
  textStyle?: object;
}

export default function PrimaryButton({
  title,
  textStyle,
  style,
  ...rest
}: Props) {
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
      },
      text: {
        ...typography.paragraphSemiThree,
        color: colors.shades.black,
      },
    });
  }
}
