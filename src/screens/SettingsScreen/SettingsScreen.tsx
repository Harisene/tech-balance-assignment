import React from "react";
import { View, StyleSheet } from "react-native";
import useTheme from "@hooks/useTheme";
import { horizontalScale, verticalScale } from "@themes/metrics";
import strings from "@resources/strings";
import SettingsActionButton from "@components/SettingsScreen/SettingsActionButton";
import typography from "@themes/typography";
import Button from "@components/Button";
import { ButtonType } from "@models/button";

export default function SettingsScreen() {
  const { colors } = useTheme();

  const styles = getStyles();

  return (
    <View style={styles.container}>
      <View style={styles.actionButtonsContainer}>
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
      </View>
      <Button
        type={ButtonType.PRIMARY}
        title={strings.logout}
        onPress={handleLogout}
        containerStyle={styles.logoutButton}
        textStyle={styles.logoutText}
      />
    </View>
  );

  function handleAccount() {
    console.log("Navigate to Account screen");
  }

  function handleNotifications() {
    console.log("Navigate to Notifications screen");
  }

  function handleHelpAndSupport() {
    console.log("Navigate to Help and Support screen");
  }

  function handlePrivacyPolicy() {
    console.log("Navigate to Privacy Policy screen");
  }

  function handleTermsAndConditions() {
    console.log("Navigate to Terms and Conditions screen");
  }

  function handleLogout() {
    console.log("Logout");
  }

  function getStyles() {
    return StyleSheet.create({
      container: {
        alignItems: "center",
      },
      actionButtonsContainer: {
        width: horizontalScale(360),
        borderRadius: horizontalScale(10),
        backgroundColor: colors.shades.white,
        marginTop: horizontalScale(20),
        overflow: "hidden",
      },
      logoutButton: {
        width: horizontalScale(360),
        backgroundColor: colors.tbPrimary.mute,
        marginTop: verticalScale(30),
        height: verticalScale(52),
        borderRadius: horizontalScale(50),
      },
      logoutText: {
        ...typography.paragraphSemiThree,
      },
    });
  }
}
