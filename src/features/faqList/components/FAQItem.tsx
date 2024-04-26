import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import FeatherIcon from "@expo/vector-icons/Feather";
import useTheme from "@hooks/useTheme";
import PressableButton from "@components/Buttons/PressableButton";
import typography from "@themes/typography";
import { verticalScale } from "@themes/metrics";

interface Props {
  question: string;
  answer: string;
  isLastItem?: boolean;
}

export default function FAQItem(props: Props) {
  const { colors } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <PressableButton style={styles.questionContainer} onPress={toggleExpand}>
        <Text style={styles.question}>{props.question}</Text>
        <FeatherIcon
          name={isExpanded ? "chevron-up" : "chevron-down"}
          size={20}
          color={colors.shades.black}
        />
      </PressableButton>

      {isExpanded && (
        <View style={styles.answerContainer}>
          <Text style={styles.answer}>{props.answer}</Text>
        </View>
      )}
    </View>
  );

  function toggleExpand() {
    setIsExpanded((prev) => !prev);
  }

  function getStyles() {
    return StyleSheet.create({
      container: {
        borderBottomWidth: props.isLastItem || isExpanded ? 0: verticalScale(2),
        borderBottomColor: colors.primary.mute,
      },
      questionContainer: {
        padding: verticalScale(16),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: colors.primary.mute,
      },
      answerContainer: {
        padding: verticalScale(16),
        backgroundColor: colors.shades.lightGrey,
        borderBottomWidth: props.isLastItem ? 0: verticalScale(2),
        borderBottomColor: colors.primary.mute,
      },
      question: {
        ...typography.paragraphThree,
      },
      answer: {
        ...typography.paragraphThree,
        color: colors.shades.grey,
      },
    });
  }
}
