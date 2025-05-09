import { createSlice } from "@reduxjs/toolkit";

// array of two post objects
const initialState = [
    { 
        id: '1',
        title: 'Learning Redux Toolkit',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, optioo.',
    },
    {
        id: '2',
        title: 'Slices..',
        content: 'Lorem ipsum dolor sit amet.'
    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload);
        }
    }
})

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;