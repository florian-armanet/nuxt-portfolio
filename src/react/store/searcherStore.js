import { createSlice } from '@reduxjs/toolkit'

export const searcherStore = createSlice({
    name: 'searcher',
    initialState: {
        searchValue: '',
    },
    reducers: {
        setSearcher: (state, { payload }) => {
            state.searchValue = payload
        },
    },
})

export default searcherStore.reducer

export const { setSearcher } = searcherStore.actions
