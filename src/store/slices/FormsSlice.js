import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'formSlice',
  initialState: {
      searchQuery:'',
    searchFiltersForm: {
        searchIn: 'title,description,content',
        sortBy:'relevancy',
        to: '',
        from: '',
        language: 'en'
    },
    
    languages: [
        {
            name: "Arabic",
            isoCode: "ar"
        },
        {
            name: "German",
            isoCode: "de"
        },
        {
            name: "English",
            isoCode: "en"
        },
        {
            name: "Spanish",
            isoCode: "es"
        },
        {
            name: "French",
            isoCode: "fr"
        },
        {
            name: "Hebrew",
            isoCode: "he"
        },
        {
            name: "Italian",
            isoCode: "it"
        },
        {
            name: "Dutch",
            isoCode: "nl"
        },
        {
            name: "Norwegian",
            isoCode: "no"
        },
        {
            name: "Portuguese",
            isoCode: "pt"
        },
        {
            name: "Russian",
            isoCode: "ru"
        },
        {
            name: "Swedish",
            isoCode: "sv"
        },
        {
            name: "Unknown",
            isoCode: "ud"
        },
        {
            name: "Chinese",
            isoCode: "zh"
        }
      ],
      
  },
  reducers: {
    updateSearchQuery: (state, action) => {
        state.searchQuery = action.payload;
      },
    updateSearchFiltersForm: (state, action) => {
      state.searchFiltersForm = { ...state.searchFiltersForm, ...action.payload };
    },
    
    resetSearchFiltersForm: (state, action) => {
      state.searchFiltersForm = action.payload;
    }
    
    
  },
})

// Action creators are generated for each case reducer function
export const { updateSearchFiltersForm, resetSearchFiltersForm, updateSearchQuery } = formSlice.actions

export default formSlice.reducer;

