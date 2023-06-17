import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const showPost = createAsyncThunk(
  "showPost",
  async (userId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3500/posts?userId=${userId}`
    );
    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//create Todo
export const createPost = createAsyncThunk(
  "createPost",
  async (data, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3500/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
//update todo
export const updatePost = createAsyncThunk(
  "updatePost",
  async (data, { rejectWithValue }) => {
    console.log("updated data", data);
    const response = await fetch(`http://localhost:3500/posts/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//delete todoos
export const deletePost = createAsyncThunk(
  "deletePost",
  async (id,) => {
    const response = await fetch(`http://localhost:3500/posts/${id}`, {
      method: "DELETE",
    });

    try {
      const result = await response.json();
      console.log(result);
      return id;
    } catch (error) {
      console.log(error.message)
      return(error);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    userPosts: [],
    // edit:[],
    data:[],
    loading: false,
    error: "",
  },
  extraReducers: {
    [createPost.pending]: (state) => {
      state.loading = true;
    },
    [createPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.data=action.payload;
      state.error= "Succesfully created";
      state.userPosts.push(action.payload);
    },
    [createPost.rejected]: (state, action) => {
      state.loading = false;
      state.userPosts = action.payload;
      state.error = "Not created";
    },
    [showPost.pending]: (state, action) => {
      state.loading = true;
    },
    [showPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.data=action.payload;
      state.error=null;
      state.userPosts = action.payload;
    },
    [showPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [updatePost.pending]: (state) => {
      state.loading = true;
    },
    [updatePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.error= "Succesfully updated";
      state.userPosts = state.userPosts.map((ele) =>
        ele.id === action.payload.id ? action.payload : ele
      );
    },
    [updatePost.rejected]: (state, action) => {
      state.loading = false;
      state.userPosts = action.payload;
      state.error = "Not updated";
    },
    [deletePost.pending]: (state) => {
      state.loading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      console.log(action)
      // state.loading = true;
      state.userPosts = state.userPosts.filter(
        (ele) => ele.id !== action.payload
      );
      // state.data=action.payload;
       state.error="Successfully Deleted";
    },
    [deletePost.rejected]: (state, action) => {
      console.log(action)
      state.loading = false;
      // state.data=null;
       state.error = "not submitted"
    },
  },
});

export default postSlice.reducer;
