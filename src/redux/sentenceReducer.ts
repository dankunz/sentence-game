import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import type { SentenceType } from "../types/types";

const initialState = {
    who: "",
    where: "",
    when: "",
    what: ""
}

const sentenceSluce = createSlice({
    name: 'sentence',
    initialState,
    reducers: {
        set: (_, action: PayloadAction<SentenceType>) => action.payload,
        clear: () => initialState,
    },
})
export const { set, clear } = sentenceSluce.actions;

export default sentenceSluce.reducer;