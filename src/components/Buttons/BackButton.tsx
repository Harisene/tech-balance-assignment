import React from "react";
import AntDesignIcons from "@expo/vector-icons/AntDesign";
import useTheme from "@hooks/useTheme";
import { moderateScale } from "@themes/metrics";
import PressableButton from "@components/Buttons/PressableButton";
import { BackButtonProps } from "@models/button.model";
import { useNavigation } from "@react-navigation/native";
import { GestureResponderEvent } from "react-native";

export default function BackButton({ onPress, ...rest }: BackButtonProps) {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <PressableButton {...rest} onPress={handleBackPress}>
      <AntDesignIcons
        name="arrowleft"
        size={moderateScale(24)}
        color={colors.shades.black}
      />
    </PressableButton>
  );

  function handleBackPress(event: GestureResponderEvent) {
    onPress ? onPress(event) : navigation.goBack();
  }
}
