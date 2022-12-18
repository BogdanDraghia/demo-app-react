import { configureStore } from '@reduxjs/toolkit'
import PodcastReducer from "./slices/podcast"

const reducer = {
    podcasts:PodcastReducer
}

const store = configureStore({
    reducer: reducer,
    devTools: true,
  })
  
  export default store;