import React from "react";
import { View, StyleSheet, ViewStyle, StyleProp } from "react-native";
import useTheme from "@hooks/useTheme";
import { verticalScale } from "@themes/metrics";

interface Props {
  style?: StyleProp<ViewStyle>
}

export default function Divider(props: Props) {
  const { colors } = useTheme();
  const styles = getStyles();

  return <View style={[styles.container, props.style]} />;

  function getStyles() {
    return StyleSheet.create({
      container: {
        width: '100%',
        height: verticalScale(2),
        backgroundColor: colors.primary.mute,
      },
    });
  }
}
