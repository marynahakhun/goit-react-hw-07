import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://66470cfb51e227f23ab0de65.mockapi.io"
export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
         const response = await axios.get("/contacts")
    return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
   
})
export const AddContacts = createAsyncThunk("contacts/addContact", async(newContact, thunkAPI) => {
    try {
        const response = await axios.post("/contacts", newContact)
        return response.data

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})
export const deleteContacts = createAsyncThunk("deleteContact", async (Id, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${Id}`)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
}
)