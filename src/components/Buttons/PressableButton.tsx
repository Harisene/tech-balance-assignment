import React from "react";
import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";

export default function PressableButton({ children, style, ...rest }: PressableProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
        style as StyleProp<ViewStyle>
      ]}
      {...rest}
    >
      {children}
    </Pressable>
  );
}
