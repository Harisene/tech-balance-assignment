import { StyleSheet } from "react-native";
import { moderateScale } from "./metrics";

const typography = StyleSheet.create({
  headingOne: {
    fontFamily: 'Poppins-Bold',
    fontSize: moderateScale(24),
  },
  paragraphOne: {
    fontFamily: 'Poppins-Regular',
    fontSize: moderateScale(24),
  },
  paragraphTwo: {
    fontFamily: 'Poppins-Regular',
    fontSize: moderateScale(18),
  },
  paragraphThree: {
    fontFamily: 'Poppins-Regular',
    fontSize: moderateScale(16),
  },
  paragraphFour: {
    fontFamily: 'Poppins-Regular',
    fontSize: moderateScale(14),
  },
  paragraphFive: {
    fontFamily: 'Poppins-Regular',
    fontSize: moderateScale(13),
  },
  paragraphSemiOne: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: moderateScale(24),
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