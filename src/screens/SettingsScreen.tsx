import React from "react";
import { View, StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "@themes/metrics";
import strings from "@resources/strings";
import PrimaryButton from "@components/Buttons/PrimaryButton";
import SettingsList from "@features/settingsList/components/SettingsList";

export default function SettingsScreen() {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <SettingsList />
      <PrimaryButton
        title={strings.logout}
        onPress={handleLogout}
        style={styles.logoutButton}
      />
    </View>
  );

  function handleLogout() {
    console.log("Logout");
  }

  function getStyles() {
    return StyleSheet.create({
      container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: horizontalScale(20)
      },
      logoutButton: {
        marginTop: verticalScale(30)
      },
    });
  }
}
