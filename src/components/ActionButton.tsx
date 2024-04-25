import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import FeatherIcon from "@expo/vector-icons/Feather";
import typography from "@themes/typography";
import { ActionButtonProps, CommonButtonProps } from "@models/button";

interface Props extends Omit<ActionButtonProps & CommonButtonProps, "type"> {}

export default function ActionButton(props: Props) {
  const styles = getStyles();

  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
        styles.container,
        props.containerStyle,
      ]}
    >
      <Text style={styles.title}>{props.title}</Text>
      {renderIcon()}
    </Pressable>
  );

  function renderIcon() {
    if (props.renderIcon) {
      return props.renderIcon();
    }
    return <FeatherIcon name="chevron-right" size={20} color="black" />;
  }

  function getStyles() {
    return StyleSheet.create({
      container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      title: {
        ...typography.paragraphSemiThree,
      },
    });
  }
}
