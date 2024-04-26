import React from "react";
import {
  Text,
  StyleSheet,
  PressableProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import FeatherIcon from "@expo/vector-icons/Feather";
import useTheme from "@hooks/useTheme";
import PressableButton from "@components/Buttons/PressableButton";
import typography from "@themes/typography";

interface Props extends PressableProps {
  title: string;
  renderIcon?: () => React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
}

export default function ActionButton({
  title,
  textStyle,
  renderIcon: rIcon,
  style,
  ...rest
}: Props) {
  const { colors } = useTheme();
  const styles = getStyles();

  return (
    <PressableButton style={[styles.container, style as StyleProp<ViewStyle>]} {...rest}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
      {renderIcon()}
    </PressableButton>
  );

  function renderIcon() {
    if (rIcon) {
      return rIcon();
    }
    return (
      <FeatherIcon name="chevron-right" size={20} color={colors.shades.black} />
    );
  }

  function getStyles() {
    return StyleSheet.create({
      container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      text: {
        ...typography.paragraphSemiThree,
        color: colors.shades.black,
      }
    });
  }
}
