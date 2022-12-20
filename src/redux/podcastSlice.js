import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import PodcastService from "../services/podcast.service";

const initialState =  [];

export const getAllPodcasts = createAsyncThunk(
    "podcasts/getAll",
    async ()=>{
        const res = await PodcastService.getAllPodcasts()
        return res
    }
)

const podcastSlice = createSlice({
    name: "podcasts",
    initialState,
    extraReducers:{
        [getAllPodcasts.fulfilled]: (state, action) => {
            return [...action.payload];
          },
    }
})

const { reducer } = podcastSlice;
export default reducer;