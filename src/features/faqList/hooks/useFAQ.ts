import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/store";
import { fetchFAQs } from "../store/faqList.slice";

export default function useFAQ() {
  const dispatch: AppDispatch = useDispatch();

  const allFAQDataByCategory = useSelector(
    (state: RootState) => state.faq.faqsByCategory
  );
  const selectedCategoryId = useSelector(
    (state: RootState) => state.faq.selectedCategoryId
  );

  function getFAQData() {
    dispatch(fetchFAQs());
  }

  return {
    getFAQData,
    selectedCategoryId,
    allFAQDataByCategory,
  };
}
