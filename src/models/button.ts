import { TextStyle, ViewStyle, StyleProp } from "react-native";

export enum ButtonType {
  PRIMARY = 'primary',
  ACTION = 'action'
}

export type CommonButtonProps = {
  containerStyle?: StyleProp<ViewStyle>;
  onPress: () => void;

}

export type PrimaryButtonProps = {
  type: ButtonType.PRIMARY;
  title: string;
  textStyle?: StyleProp<TextStyle>;
}

export type ActionButtonProps = {
  type: ButtonType.ACTION;
  title: string;
  textStyle?: StyleProp<TextStyle>;
  renderIcon?: () => React.ReactElement;
}

type ConditionalButtonProps = PrimaryButtonProps | ActionButtonProps;

export type ButtonProps = CommonButtonProps & ConditionalButtonProps;
