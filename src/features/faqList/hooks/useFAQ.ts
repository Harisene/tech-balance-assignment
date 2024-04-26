import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/store";
import { fetchFAQs } from "../store/faqList.slice";

export default function useFAQ() {
  const dispatch: AppDispatch = useDispatch();

  const faq = useSelector((state: RootState) => state.faq);

  function getFAQData() {
    dispatch(fetchFAQs());
  }

  return {
    getFAQData,
    selectedCategoryId: faq.selectedCategoryId,
    allFAQDataByCategory: faq.faqsByCategory,
    isLoading: !faq.isDataFetched,
  };
}
