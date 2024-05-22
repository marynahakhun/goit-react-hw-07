import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://66470cfb51e227f23ab0de65.mockapi.io"
export const fetchContacts = createAsyncThunk("fetchAllontacts", async (_, thunkAPI) => {
    try {
         const response = await axios.get("/contacts")
    return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
   
})
export const AddContacts = createAsyncThunk("AddContacts", async(newContact, thunkAPI) => {
    try {
        const response = await axios.post("/contacts", newContact)
        return response.data

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})
export const deleteContacts = createAsyncThunk("delete", async (Id, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${Id}`)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
}
)