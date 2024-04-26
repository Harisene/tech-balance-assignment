import React from "react";
import { View, StyleSheet } from "react-native";
import ContactInfo from "@features/contactInfo/components/ContactInfo";
import FAQList from "@features/faqList/components/FAQList";
import Divider from "@components/Divider";
import { horizontalScale, verticalScale } from "@themes/metrics";

export default function HelpScreen() {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <ContactInfo />
      <Divider style={styles.divider} />
      <FAQList />
    </View>
  );

  function getStyles() {
    return StyleSheet.create({
      container: {
        flex: 1,
        paddingHorizontal: horizontalScale(20)
      },
      divider: {
        marginVertical: verticalScale(20),
        height: verticalScale(1)
      }
    });
  }
}
