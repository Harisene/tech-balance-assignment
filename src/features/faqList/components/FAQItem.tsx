import React, { useState } from "react";
import { View, Text, StyleSheet, LayoutAnimation } from "react-native";
import FeatherIcon from "@expo/vector-icons/Feather";
import useTheme from "@hooks/useTheme";
import PressableButton from "@components/Buttons/PressableButton";
import typography from "@themes/typography";
import { moderateScale, verticalScale } from "@themes/metrics";

interface Props {
  question: string;
  answer: string;
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
          style={styles.icon}
          name={isExpanded ? "chevron-up" : "chevron-down"}
          size={moderateScale(20)}
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
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  }

  function getStyles() {
    return StyleSheet.create({
      container: {
        marginTop: verticalScale(5),
        backgroundColor: colors.shades.white,
        borderRadius: verticalScale(10),
        overflow: 'hidden'
      },
      questionContainer: {
        padding: verticalScale(16),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      answerContainer: {
        padding: verticalScale(16),
        backgroundColor: colors.shades.lightGrey,
      },
      question: {
        flex: 1,
        ...typography.paragraphThree,
        color: colors.shades.black,
      },
      answer: {
        ...typography.paragraphThree,
        color: colors.shades.grey,
      },
      icon: {
        flexShrink: 1,
      },
    });
  }
}
