import React from "react";
import AntDesignIcons from "@expo/vector-icons/AntDesign";
import useTheme from "@hooks/useTheme";
import { moderateScale } from "@themes/metrics";
import PressableButton from "@components/Buttons/PressableButton";
import { PressableProps } from "react-native";

interface Props extends PressableProps {
  iconColor?: string;
  iconSize?: number;
}

export default function BackButton({
  iconColor,
  iconSize,
  onPress,
  ...rest
}: Props) {
  const { colors } = useTheme();

  return (
    <PressableButton {...rest} onPress={onPress}>
      <AntDesignIcons
        name="arrowleft"
        size={moderateScale(24)}
        color={iconColor || colors.shades.black}
      />
    </PressableButton>
  );
}
