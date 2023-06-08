import {configureStore} from "@reduxjs/toolkit";
import  TodoReducer from './features/TodoSlice';
import PostReducer from './features/PostSlice';
import CommentReducer from './features/CommentSlice';
import UserReducer from './features/UserSlice';
import AlbumReducer from './features/AlbumSlice';
import PhotoReducer from './features/PhotoSlice'
export default configureStore({
    reducer: {
        app: TodoReducer,
        userPosts: PostReducer,
        userComments:CommentReducer,
        userIntro:UserReducer,
        userAlbums:AlbumReducer,
        userPhotos:PhotoReducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      })
})