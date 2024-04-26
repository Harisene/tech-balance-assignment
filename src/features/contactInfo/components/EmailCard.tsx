import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Card from "@components/Card";
import { EMAIL } from "@resources/constants";
import strings from "@resources/strings";
import { horizontalScale, moderateScale, verticalScale } from "@themes/metrics";
import useTheme from "@hooks/useTheme";
import typography from "@themes/typography";
import PressableButton from "@components/Buttons/PressableButton";

export default function EmailCard() {
  const { colors } = useTheme();
  const styles = getStyles();

  return (
    <Card style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialIcons
          name="mail"
          size={moderateScale(18)}
          color={colors.secondary.default}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{strings.write_us_at}</Text>
        <PressableButton onPress={handleButton}>
          <Text style={styles.info}>{EMAIL}</Text>
        </PressableButton>
      </View>
    </Card>
  );

  function handleButton() {
    Linking.openURL(`mailto:${EMAIL}`);
  }

  function getStyles() {
    return StyleSheet.create({
      container: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginTop: verticalScale(14),
        padding: horizontalScale(14),
      },
      iconContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: horizontalScale(40),
        height: verticalScale(40),
        borderRadius: horizontalScale(20),
        backgroundColor: colors.primary.mute,
      },
      textContainer: {
        marginLeft: horizontalScale(20),
      },
      title: {
        color: colors.shades.grey,
        ...typography.paragraphFive,
      },
      info: {
        marginTop: verticalScale(2),
        color: colors.secondary.default,
        ...typography.paragraphSemiThree,
        flexWrap: "wrap",
      },
    });
  }
}
