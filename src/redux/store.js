import { configureStore } from '@reduxjs/toolkit'
import podcastReducer from './podcastSlice';

const reducer = {
  podcasts: podcastReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;