import React from "react";
import { Text, StyleSheet, FlatList, View } from "react-native";
import useTheme from "@hooks/useTheme";
import strings from "@resources/strings";
import typography from "@themes/typography";
import { verticalScale } from "@themes/metrics";
import FAQItem from "./FAQItem";

const DATA = [
  {
    id: "1",
    question: "How do I change my password?",
    answer:
      "You can change your password by going to the settings page and clicking on the 'Change Password' button.",
  },
  {
    id: "2",
    question: "How do I update my email address?",
    answer:
      "You can update your email address by going to the settings page and clicking on the 'Update Email' button.",
  },
  {
    id: "3",
    question: "How do I delete my account?",
    answer:
      "You can delete your account by going to the settings page and clicking on the 'Delete Account' button.",
  },
  {
    id: "4",
    question: "How do I change my profile picture?",
    answer:
      "You can change your profile picture by going to the settings page and clicking on the 'Change Profile Picture' button.",
  },
];

export default function FAQList() {
  const { colors } = useTheme();
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{strings.faq}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
        data={DATA}
        renderItem={renderItem}
        alwaysBounceVertical={false}
      />
    </View>
  );

  function renderItem({
    item,
    index,
  }: {
    item: (typeof DATA)[0];
    index: number;
  }) {
    return (
      <FAQItem
        key={item.id}
        question={item.question}
        answer={item.answer}
        isLastItem={index + 1 === DATA.length}
      />
    );
  }
  function getStyles() {
    return StyleSheet.create({
      container: {
        flexShrink: 1,
      },
      flatList: {
        borderRadius: verticalScale(20),
        backgroundColor: colors.shades.white,
        marginTop: verticalScale(10),
      },
      title: {
        ...typography.paragraphThree,
        color: colors.shades.black,
      },
    });
  }
}
