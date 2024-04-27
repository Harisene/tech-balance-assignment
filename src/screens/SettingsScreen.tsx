import React from "react";
import { View, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import useTheme from "@hooks/useTheme";
import { horizontalScale, verticalScale } from "@themes/metrics";
import strings from "@resources/strings";
import { RootStackParamList } from "@navigation/StackNavigation";
import PrimaryButton from "@components/Buttons/PrimaryButton";
import SettingsList from "@features/settingsList/components/SettingsList";

interface SettingsScreenProps extends NativeStackScreenProps<RootStackParamList, 'Settings'> {}

export default function SettingsScreen(_: SettingsScreenProps) {
  const { colors } = useTheme();

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
