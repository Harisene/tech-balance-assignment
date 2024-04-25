import { StyleSheet } from "react-native";
import { moderateScale } from "./metrics";

const typography = StyleSheet.create({
  headingOne: {
    fontFamily: 'Poppins',
    fontWeight: "700",
    fontSize: moderateScale(24),
  },
});

export default typography;