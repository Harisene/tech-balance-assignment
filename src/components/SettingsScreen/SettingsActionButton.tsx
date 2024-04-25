import React from "react";
import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "@themes/metrics";
import ActionButton from "@components/ActionButton";
import Divider from "@components/Divider";

interface Props {
  title: string;
  hideDivider?: boolean;
  onPress: () => void;
}

export default function SettingsActionButton(props: Props) {
  const styles = getStyles();

  return (
    <>
      <ActionButton
        title={props.title}
        onPress={props.onPress}
        containerStyle={styles.actionButton}
      />
      {!props.hideDivider && <Divider style={styles.divider} />}
    </>
  );

  function getStyles() {
    return StyleSheet.create({
      actionButton: {
        height: verticalScale(60),
        paddingHorizontal: horizontalScale(16),
      },
      divider: {
        width: "90%",
        marginHorizontal: horizontalScale(16),
      },
    });
  }
}
