import { configureStore } from '@reduxjs/toolkit'
import sentenceReducer from './sentenceReducer'

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
    reducer: {
        sentence: sentenceReducer
    },
})

export default store