import {configureStore} from "@reduxjs/toolkit";
import  TodoReducer from './features/TodoSlice';
import PostReducer from './features/PostSlice';
export default configureStore({
    reducer: {
        app: TodoReducer,
        userPosts: PostReducer,
      },
})