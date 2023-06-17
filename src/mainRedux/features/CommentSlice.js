import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const showComments = createAsyncThunk(
  "showComments",
  async (postId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3500/comments?postId=${postId}`
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
export const createComment = createAsyncThunk(
  "createComment",
  async (data, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3500/comments", {
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
export const updateComment = createAsyncThunk(
  "updateComment",
  async (data, { rejectWithValue }) => {
    console.log("updated data", data);
    const response = await fetch(`http://localhost:3500/comments/${data.id}`, {
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
export const deleteComment = createAsyncThunk(
  "deleteComment",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3500/comments/${id}`, {
      method: "DELETE",
    });

    try {
      const result = await response.json();
      console.log(result);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const commentSlice = createSlice({
  name: "post",
  initialState: {
    userComments: [],
   
    loading: false,
    error: null,
  },
  extraReducers: {
    [createComment.pending]: (state) => {
      state.loading = true;
    },
    [createComment.fulfilled]: (state, action) => {
      state.loading = false;
      state.userComments.push(action.payload);
      state.error = "Successfully Created"
    },
    [createComment.rejected]: (state, action) => {
      state.loading = false;
      state.userComments = action.payload;
      state.error = "Not Created"
    },
    [showComments.pending]: (state, action) => {
      state.loading = true;
    },
    [showComments.fulfilled]: (state, action) => {
      state.loading = false;
      state.userComments = action.payload;
      
    },
    [showComments.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [updateComment.pending]: (state) => {
      state.loading = true;
    },
    [updateComment.fulfilled]: (state, action) => {
      state.loading = false;
      state.userComments = state.userComments.map((ele) =>
        ele.id === action.payload.id ? action.payload : ele
      );
      state.error = "Successfully Updated"
    },
    [updateComment.rejected]: (state, action) => {
      state.loading = false;
      state.userComments = action.payload;
      state.error = "Not Updated"
    },
    [deleteComment.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.userComments = state.userComments.filter(
        (ele) => ele.id !== action.payload
      );
      state.error = "Successfully Deleted"
    },
    [deleteComment.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.payload;
      state.error = "Not Deleted"
    },
  },
});

export default commentSlice.reducer;
