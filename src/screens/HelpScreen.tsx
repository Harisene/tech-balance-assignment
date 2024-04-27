import React from "react";
import { View, StyleSheet } from "react-native";
import ContactInfo from "@features/contactInfo/components/ContactInfo";
import FAQList from "@features/faqList/components/FAQList";
import Divider from "@components/Divider";
import { horizontalScale, moderateScale, verticalScale } from "@themes/metrics";
import FloatingActionButton from "@components/Buttons/FloatingActionButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import useTheme from "@hooks/useTheme";

export default function HelpScreen() {
  const { colors } = useTheme();
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ContactInfo />
        <Divider style={styles.divider} />
        <FAQList />
      </View>
      <View style={styles.buttonContainer}>
        <FloatingActionButton onPress={null}>
          <Ionicons
            name="chatbox"
            size={moderateScale(30)}
            color={colors.shades.white}
          />
        </FloatingActionButton>
      </View>
    </View>
  );

  function getStyles() {
    return StyleSheet.create({
      container: {
        flex: 1,
        paddingHorizontal: horizontalScale(20),
      },
      innerContainer: {
        flex: 8,
      },
      divider: {
        marginVertical: verticalScale(20),
        height: verticalScale(1),
      },
      buttonContainer: {
        flex: 1,
        marginBottom: verticalScale(20),
      },
    });
  }
}
