import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FAQ, FAQCategory } from "../models/faq.model";
import { FAQS } from "../data";

export interface CounterState {
  allFAQData: FAQCategory[];
  selectedCategoryId: string;
  faqsByCategory: FAQ[];
  isDataFetched: boolean;
  error?: string;
}

const initialState: CounterState = {
  allFAQData: [],
  selectedCategoryId: "all",
  faqsByCategory: [],
  isDataFetched: false,
  error: undefined,
};

export const faqListSlice = createSlice({
  name: "faqList",
  initialState,
  reducers: {
    setSelectedCategoryId: (state, action: PayloadAction<string>) => {
      state.selectedCategoryId = action.payload;

      if (action.payload === "all") {
        state.faqsByCategory = getAllFAQs(state.allFAQData);
        return;
      }
      const selectedCategoryData = getFAQDataByCategoryId(
        state.allFAQData,
        action.payload
      );
      state.faqsByCategory = selectedCategoryData
        ? selectedCategoryData.faqs
        : [];
    },
    resetFAQError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFAQs.pending, (state) => {
        state.isDataFetched = false;
        state.error = undefined;
      })
      .addCase(fetchFAQs.fulfilled, (state, action) => {
        const allFAQData = action.payload;
        state.allFAQData = allFAQData;
        state.faqsByCategory = getAllFAQs(allFAQData);
        state.isDataFetched = true;
      })
      .addCase(fetchFAQs.rejected, (state, action) => {
        state.isDataFetched = true;
        state.error = action.payload as string;
      });
  },
});

function getAllFAQs(allFAQData: FAQCategory[]) {
  return allFAQData.reduce(
    (acc, category) => acc.concat(category.faqs),
    [] as FAQ[]
  );
}

function getFAQDataByCategoryId(allFAQData: FAQCategory[], categoryId: string) {
  return allFAQData.find((category) => category.id === categoryId);
}

export const fetchFAQs = createAsyncThunk(
  "fetchFAQs",
  async (_, { rejectWithValue }) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return FAQS;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Action creators are generated for each case reducer function
export const { setSelectedCategoryId, resetFAQError } = faqListSlice.actions;

export default faqListSlice.reducer;
