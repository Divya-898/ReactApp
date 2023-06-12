import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const showPhotos = createAsyncThunk(
  "showPhotos",
  async (common, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3500/photos?${common}`
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
export const createPhotos = createAsyncThunk(
  "createPhotos",
  async (data, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3500/photos`, {
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
export const updatePhotos = createAsyncThunk(
  "updatePhotos",
  async (data, { rejectWithValue }) => {
    console.log("updated data", data);
    const response = await fetch(`http://localhost:3500/photos/${data.id}`, {
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
export const deletePhotos = createAsyncThunk(
  "deletePhotos",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3500/photos/${id}`, {
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

const photoSlice = createSlice({
  name: "post",
  initialState: {
    photos: [],
   
    loading: false,
    error: null,
  },
  extraReducers: {
    [createPhotos.pending]: (state) => {
      state.loading = true;
    },
    [createPhotos.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.photos.push(action.payload);
    },
    [createPhotos.rejected]: (state, action) => {
      state.loading = false;
      state.photos = action.payload;
    },
    [showPhotos.pending]: (state, action) => {
      state.loading = true;
    },
    [showPhotos.fulfilled]: (state, action) => {
      state.loading = false;
      state.photos = action.payload;
    },
    [showPhotos.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [updatePhotos.pending]: (state) => {
      state.loading = true;
    },
    [updatePhotos.fulfilled]: (state, action) => {
      state.loading = false;
      state.photos = state.photos.map((ele) =>
        ele.id === action.payload.id ? action.payload : ele
      );
    },
    [updatePhotos.rejected]: (state, action) => {
      state.loading = false;
      state.photos = action.payload;
    },
    [deletePhotos.pending]: (state) => {
      state.loading = true;
    },
    [deletePhotos.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.photos = state.photos.filter(
        (ele) => ele.id !== action.payload
      );
    },
    [deletePhotos.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    },
  },
});

export default photoSlice.reducer;
