import { PressableProps, StyleProp, TextStyle } from "react-native";

export interface PrimaryButtonProps extends PressableProps {
  title: string;
  textStyle?: StyleProp<TextStyle>;
}

export interface ActionButtonProps extends PressableProps {
  title: string;
  renderIcon?: () => React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
}

export interface BackButtonProps extends PressableProps {
  iconColor?: string;
  iconSize?: number;
}
