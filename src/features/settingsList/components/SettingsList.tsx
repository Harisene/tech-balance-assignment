import React from "react";
import { StyleSheet } from "react-native";
import Card from "@components/Card";
import strings from "@resources/strings";
import SettingsActionButton from "./SettingsActionButton";
import { useNavigation } from "@react-navigation/native";
import { horizontalScale } from "@themes/metrics";

export default function SettingsList() {
  const navigation = useNavigation();
  const styles = getStyles();

  return (
    <Card style={styles.container}>
      <SettingsActionButton title={strings.account} onPress={handleAccount} />
      <SettingsActionButton
        title={strings.notifications}
        onPress={handleNotifications}
      />
      <SettingsActionButton
        title={strings.help_support}
        onPress={handleHelpAndSupport}
      />
      <SettingsActionButton
        title={strings.privacy_policy}
        onPress={handlePrivacyPolicy}
      />
      <SettingsActionButton
        title={strings.terms_conditions}
        onPress={handleTermsAndConditions}
        hideDivider
      />
    </Card>
  );

  function handleAccount() {
    console.log("Navigate to Account screen");
  }

  function handleNotifications() {
    console.log("Navigate to Notifications screen");
  }

  function handleHelpAndSupport() {
    navigation.navigate("Help");
  }

  function handlePrivacyPolicy() {
    console.log("Navigate to Privacy Policy screen");
  }

  function handleTermsAndConditions() {
    console.log("Navigate to Terms and Conditions screen");
  }

  function getStyles() {
    return StyleSheet.create({
      container: {
        width: '100%',
        marginTop: horizontalScale(20),
        overflow: "hidden",
      },
    });
  }
}
