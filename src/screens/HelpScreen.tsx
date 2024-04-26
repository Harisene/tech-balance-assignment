import React from "react";
import { View, StyleSheet } from "react-native";
import ContactInfo from "@features/contactInfo/components/ContactInfo";
import FAQList from "@features/faqList/components/FAQList";
import Divider from "@components/Divider";
import { horizontalScale, verticalScale } from "@themes/metrics";
import PrimaryButton from "@components/Buttons/PrimaryButton";
import strings from "@resources/strings";

export default function HelpScreen() {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ContactInfo />
        <Divider style={styles.divider} />
        <FAQList />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton title={strings.start_conversation} onPress={null} />
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
        flex: 1,
      },
      divider: {
        marginVertical: verticalScale(20),
        height: verticalScale(1),
      },
      buttonContainer: {
        marginBottom: verticalScale(20),
      },
    });
  }
}
