import { StyleSheet } from "react-native";
import { moderateScale } from "./metrics";

const typography = StyleSheet.create({
  paragraphThree: {
    fontFamily: 'Poppins-Regular',
    fontSize: moderateScale(16),
  },
  paragraphFive: {
    fontFamily: 'Poppins-Regular',
    fontSize: moderateScale(13),
  },
  paragraphSemiTwo: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: moderateScale(18),
  },
  paragraphSemiThree: {
    fontFamily: 'Poppins-SemiBold',
    lineHeight: moderateScale(24),
    fontSize: moderateScale(16),
  },
  paragraphSemiFour: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: moderateScale(14),
  },
});

export default typography;