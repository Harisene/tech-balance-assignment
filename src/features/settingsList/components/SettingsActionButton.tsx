import React from "react";
import { StyleSheet, View } from "react-native";
import { horizontalScale, verticalScale } from "@themes/metrics";
import ActionButton from "@components/Buttons/ActionButton";
import Divider from "@components/Divider";
import { ActionButtonProps } from "@models/button.model";

interface Props extends ActionButtonProps {
  hideDivider?: boolean;
}

export default function SettingsActionButton(props: Props) {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <ActionButton
        title={props.title}
        onPress={props.onPress}
        style={styles.actionButton}
      />
      {!props.hideDivider && <Divider style={styles.divider} />}
    </View>
  );

  function getStyles() {
    return StyleSheet.create({
      container: {
        alignItems: "center",
      },
      actionButton: {
        height: verticalScale(60),
      },
      divider: {
        marginHorizontal: horizontalScale(16),
      },
    });
  }
}
