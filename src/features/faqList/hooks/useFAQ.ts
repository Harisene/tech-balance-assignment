import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/store";
import {
  fetchFAQs,
  resetFAQError,
  setSelectedCategoryId as setSelectedCId,
} from "../store/faqList.slice";

export default function useFAQ() {
  const dispatch: AppDispatch = useDispatch();

  const faq = useSelector((state: RootState) => state.faq);

  function resetError() {
    dispatch(resetFAQError());
  }
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
    allFAQData: faq.allFAQData,
    isLoading: !faq.isDataFetched,
    error: faq.error,
    resetError
  };
}
