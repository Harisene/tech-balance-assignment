import React from "react";
import { FlatList } from "react-native";
import { FAQS } from "../data";
import { FAQCategory } from "../models/faq.model";
import CategoryPill from "./CategoryPill";

interface Props {}

export default function FAQCategoryList(props: Props) {
  return (
    <>
      <FlatList
        data={FAQS}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );

  function renderItem({ item }: { item: FAQCategory }) {
    return <CategoryPill id={item.id} name={item.name}  />;
  }
}
