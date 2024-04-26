import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/store";
import {
  fetchFAQs,
  setSelectedCategoryId as setSelectedCId,
} from "../store/faqList.slice";

export default function useFAQ() {
  const dispatch: AppDispatch = useDispatch();

  const faq = useSelector((state: RootState) => state.faq);

  function getFAQData() {
    dispatch(fetchFAQs());
  }

  function setSelectedCategoryId(id: string) {
    dispatch(setSelectedCId(id));
  }

  return {
    getFAQData,
    setSelectedCategoryId,
    selectedCategoryId: faq.selectedCategoryId,
    allFAQDataByCategory: faq.faqsByCategory,
    isLoading: !faq.isDataFetched,
  };
}
