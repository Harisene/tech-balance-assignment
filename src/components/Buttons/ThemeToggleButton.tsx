import React from "react";
import PressableButton from "./PressableButton";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import useTheme from "@hooks/useTheme";
import { ThemeMode } from "@models/theme.model";
import { horizontalScale } from "@themes/metrics";

export default function ThemeToggleButton() {
  const { theme, toggleTheme, colors } = useTheme();

  return (
    <PressableButton onPress={handlePress}>
      {theme === ThemeMode.LIGHT ? (
        <MaterialIcons name="light-mode" size={horizontalScale(24)} />
      ) : (
        <MaterialIcons
          name="dark-mode"
          size={horizontalScale(24)}
          color={colors.shades.black}
        />
      )}
    </PressableButton>
  );

  function handlePress() {
    toggleTheme();
  }
}
