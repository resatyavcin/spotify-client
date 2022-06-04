import { configureStore } from "@reduxjs/toolkit";

//slices
import languagesSlices from "./slices/languageSlices";

export const store = configureStore({
  reducer: {
    languages: languagesSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>;
