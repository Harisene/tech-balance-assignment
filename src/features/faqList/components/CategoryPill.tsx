import React from "react";
import { Text, StyleSheet } from "react-native";
import PressableButton from "@components/Buttons/PressableButton";
import useTheme from "@hooks/useTheme";
import { horizontalScale, verticalScale } from "@themes/metrics";
import typography from "@themes/typography";

interface Props {
  id: string;
  name: string;
  selected?: boolean;
}

export default function CategoryPill(props: Props) {
  const { colors } = useTheme();
  const styles = getStyles();

  return (
    <PressableButton style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
    </PressableButton>
  );

  function getStyles() {
    return StyleSheet.create({
      container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: props.selected
          ? colors.primary.default
          : colors.primary.mute,
        borderRadius: verticalScale(60),
        padding: verticalScale(10),
        marginRight: horizontalScale(10),
      },
      text: {
        ...typography.paragraphSemiFour,
        color: colors.shades.black,
      },
    });
  }
}
