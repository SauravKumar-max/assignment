import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { InvoiceInitialState, InvoicesData } from "../features.types";
import { getInvocies } from "./invoiceServices";

export const getAllInvocies = createAsyncThunk(
    'profile/fetchAll', 
    async () => {
        const response = await getInvocies();
        return response;
    }
)

const initialState:InvoiceInitialState = {
    status: "idle",
    errorMessage: null,
    invoices: [],
};

export const invoiceSlice = createSlice({
    name: "invoice",
    initialState,
    reducers: {
        addNewInvoice: (state, action: PayloadAction<{invoice: InvoicesData}>) => {
            state.invoices?.push(action.payload.invoice)
        },
    },

    extraReducers: (builder) => {
         builder
          .addCase(getAllInvocies.pending, (state) => {
            state.status = 'loading';
            state.invoices = null;
            state.errorMessage = null;
        })
          .addCase(getAllInvocies.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.invoices = action.payload
            state.errorMessage = null;        
        })
          .addCase(getAllInvocies.rejected, (state, action) => {
            state.status = 'failed';
            state.invoices = null;
            state.errorMessage = action.error?.message || null; 
        });

    }
});

export const { addNewInvoice } = invoiceSlice.actions;


export default invoiceSlice.reducer;