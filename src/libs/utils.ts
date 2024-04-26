import { Platform } from "react-native";

export function isAndroid() {
  return Platform.OS === "android";
}

export function isIOS() {
  return Platform.OS === "ios";
}