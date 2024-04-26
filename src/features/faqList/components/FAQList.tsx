import React, { useEffect } from "react";
import { Text, StyleSheet, FlatList, View } from "react-native";
import useTheme from "@hooks/useTheme";
import strings from "@resources/strings";
import typography from "@themes/typography";
import { verticalScale } from "@themes/metrics";
import FAQItem from "./FAQItem";
import PrimaryButton from "@components/Buttons/PrimaryButton";
import FAQCategoryList from "./FAQCategoryList";
import { FAQS } from "../data";
import { FAQ } from "../models/faq.model";

export default function FAQList() {
  const { colors } = useTheme();
  const [faqs, setFaqs] = React.useState<FAQ[]>([]);
  const styles = getStyles();

  useEffect(() => {
    getAllFAQs();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{strings.faq}</Text>
      <View style={{ marginTop: verticalScale(10) }}>
        <FAQCategoryList />
      </View>
      <FlatList
        style={styles.flatList}
        data={faqs}
        renderItem={renderItem}
        alwaysBounceVertical={false}
        keyExtractor={(item) => item.question}
      />
      <PrimaryButton
        title={strings.start_conversation}
        onPress={null}
        style={styles.button}
      />
    </View>
  );

  function getAllFAQs() {
    let allFAQs: FAQ[] = [];
    FAQS.forEach((category) => {
      allFAQs.push(...category.faqs);
    });
    setFaqs(allFAQs);
  }

  function renderItem({ item, index }: { item: FAQ; index: number }) {
    return (
      <FAQItem
        question={item.question}
        answer={item.answer}
        isLastItem={index + 1 === faqs.length}
      />
    );
  }
  function getStyles() {
    return StyleSheet.create({
      container: {
        flexShrink: 1,
        paddingBottom: verticalScale(20),
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
      button: {
        marginTop: verticalScale(20),
      },
    });
  }
}
