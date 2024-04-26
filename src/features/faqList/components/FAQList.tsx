import React, { useEffect } from "react";
import { Text, StyleSheet, FlatList, View } from "react-native";
import useTheme from "@hooks/useTheme";
import strings from "@resources/strings";
import typography from "@themes/typography";
import { verticalScale } from "@themes/metrics";
import FAQItem from "./FAQItem";
import FAQCategoryList from "./FAQCategoryList";
import { FAQ } from "../models/faq.model";
import useFAQ from "../hooks/useFAQ";

export default function FAQList() {
  const { colors } = useTheme();
  const { allFAQDataByCategory, getFAQData } = useFAQ();
  const styles = getStyles();

  useEffect(() => {
    getFAQData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{strings.faq}</Text>
      <View style={styles.faqCategoryListContainer}>
        <FAQCategoryList />
      </View>
      <FlatList
        style={styles.flatList}
        data={allFAQDataByCategory}
        renderItem={renderItem}
        alwaysBounceVertical={false}
        keyExtractor={(item) => item.question}
      />
    </View>
  );

  function renderItem({ item }: { item: FAQ }) {
    return <FAQItem question={item.question} answer={item.answer} />;
  }
  function getStyles() {
    return StyleSheet.create({
      container: {
        flexShrink: 1,
        paddingBottom: verticalScale(20),
      },
      flatList: {
        borderRadius: verticalScale(20),
        marginTop: verticalScale(10),
      },
      title: {
        ...typography.paragraphThree,
        color: colors.shades.black,
      },
      faqCategoryListContainer: {
        marginTop: verticalScale(10),
      },
    });
  }
}
