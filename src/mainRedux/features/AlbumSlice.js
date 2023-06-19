import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const showAlbums = createAsyncThunk(
    "showAlbums",
    async (id,{ rejectWithValue }) => {
        const response = await fetch(
          `http://localhost:3500/albums?userId=${id}`
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
export const createAlbums = createAsyncThunk("createAlbums", async(data, {rejectWithValue})=>{
    const response = await fetch("http://localhost:3500/albums",{
     method:"POST",
     headers:{
        "Content-Type":"application/json"
     },
     body: JSON.stringify(data)
    })

    try{
     const result = await response.json();
     return result
    }catch(error){
        return rejectWithValue(error)
    }
})
// //update todo
export const updateAlbums = createAsyncThunk(
    "updateAlbums",
    async (data, { rejectWithValue }) => {
      console.log("updated data", data);
      const response = await fetch(
        `http://localhost:3500/albums/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
        }
      );
  
      try {
        const result = await response.json();
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

// //delete todoos
export const deleteAlbums = createAsyncThunk(
  "deleteAlbums",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3500/albums/${id}`,
      { method: "DELETE" }
    );

    try {
      const result = await response.json();
      console.log(result);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

    const albumSlice = createSlice({
        name:"albums",
        initialState: {
            albums: [],
        loading: false,
        error: "",
        },
        extraReducers: {
            [createAlbums.pending]:(state)=>{
                state.loading = true;
            },
            [createAlbums.fulfilled]:(state, action)=>{
              state.loading = false;
              state.albums.push(action.payload);
              state.error = "Successfully Created" 
            },
            [createAlbums.rejected]:(state, action)=>{
                state.loading = false;
                state.albums = action.payload;
                state.error = "Not Created"
            },
            [showAlbums.pending]:(state, action)=>{
                state.loading = true;
            },
            [showAlbums.fulfilled]:(state, action)=>{
                state.loading = false;
                state.albums = action.payload
            },
            [showAlbums.rejected]: (state, action) => {
                state.loading = false;
                state.error = action.payload;
              },
              
              [updateAlbums.pending]:(state)=>{
                state.loading = true;
            },
            [updateAlbums.fulfilled]:(state, action)=>{
                state.loading = false;
                state.albums=state.albums.map((ele)=>
                (ele.id === action.payload.id ? action.payload : ele)  
                )   
                state.error = "Successfully Updated"
            },
            [updateAlbums.rejected]:(state, action)=>{
                state.loading = false;
                state.albums = action.payload
                state.error = "Not Updated"
            },
            [deleteAlbums.pending]:(state, action)=>{
              state.loading = true;
          },
            [deleteAlbums.fulfilled]: (state, action) => {
              state.loading = false;
              state.albums =  state.albums.filter((ele)=>ele.id !== action.payload);
              state.error = "Successfully Deleted"
            },
            [deleteAlbums.rejected]: (state, action) => {
              state.loading = false;
              state.error = "Not Deleted"
                
            },
        }
    })
    export default albumSlice.reducer;