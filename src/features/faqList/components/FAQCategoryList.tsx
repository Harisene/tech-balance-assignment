import React from "react";
import { FlatList } from "react-native";
import { FAQCategory } from "../models/faq.model";
import CategoryPill from "./CategoryPill";
import useFAQ from "../hooks/useFAQ";

export default function FAQCategoryList() {
  const { selectedCategoryId, allFAQData, setSelectedCategoryId } = useFAQ();

  return (
    <FlatList
      data={allFAQData}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );

  function renderItem({ item }: { item: FAQCategory }) {
    return (
      <CategoryPill
        id={item.id}
        name={item.name}
        selected={selectedCategoryId === item.id}
        onCategorySelected={handleCategorySelect}
      />
    );
  }

  function handleCategorySelect(id: string) {
    setSelectedCategoryId(id);
  }
}
