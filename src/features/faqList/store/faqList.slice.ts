import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FAQ, FAQCategory } from "../models/faq.model";
import { FAQS } from "../data";

export interface CounterState {
  allFAQData: FAQCategory[];
  selectedCategoryId: string;
  faqsByCategory: FAQ[];
  isDataFetched: boolean;
}

const initialState: CounterState = {
  allFAQData: [],
  selectedCategoryId: "all",
  faqsByCategory: [],
  isDataFetched: false,
};

export const faqListSlice = createSlice({
  name: "faqList",
  initialState,
  reducers: {
    setSelectedCategoryId: (state, action: PayloadAction<string>) => {
      state.selectedCategoryId = action.payload;

      if (action.payload === "all") {
        state.faqsByCategory = state.allFAQData.reduce(
          (acc, category) => acc.concat(category.faqs),
          [] as FAQ[]
        );
        return;
      }
      const selectedCategoryData = state.allFAQData.find(
        (category) => category.id === action.payload
      );
      state.faqsByCategory = selectedCategoryData
        ? selectedCategoryData.faqs
        : [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFAQs.pending, (state) => {
        state.isDataFetched = false;
      })
      .addCase(fetchFAQs.fulfilled, (state, action) => {
        const allFAQData = action.payload;
        state.allFAQData = allFAQData;
        const faqsByCategory: FAQ[] = [];
        allFAQData.forEach((category) => {
          if (state.selectedCategoryId === "all") {
            faqsByCategory.push(...category.faqs);
          } else if (category.id === state.selectedCategoryId) {
            faqsByCategory.push(...category.faqs);
          }
        });
        state.faqsByCategory = faqsByCategory;
        state.isDataFetched = true;
      })
      .addCase(fetchFAQs.rejected, (state) => {
        state.isDataFetched = true;
      });
  },
});

export const fetchFAQs = createAsyncThunk(
  "fetchFAQs",
  async (_, { rejectWithValue }) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      return FAQS;
    } catch (error: any) {
      console.error("Error fetching FAQs", error);
      return rejectWithValue(error);
    }
  }
);

// Action creators are generated for each case reducer function
export const { setSelectedCategoryId } = faqListSlice.actions;

export default faqListSlice.reducer;
