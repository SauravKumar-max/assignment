import { Dispatch, SetStateAction } from "react";

export type InvoiceInitialState = {
    invoices: InvoicesData[] | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    errorMessage: string | null;
}

export type FetchInvoiceType = {
    invoices: InvoicesData[];
}

export type InvoicesData = {
    _id: string;
    name: string;
    notes: string;
    status: string;
    netAmount: number;
    gstAmount: number;
    grossAmount: number;
    dueDate: string;
    billNo: string;
    billDate: string;
    createdAt: string;
    lineItem: LineItems[];
}

export type LineItems = {
    _id: string;
    productName: string;
    quantity: number;
    amount: number;
    gstRate: number;
    price: number;
}

export type ServerError = {
    message: string;
};

export type AddInvoicePropType = {
    openDialog: boolean;
    setOpenDialog: Dispatch<SetStateAction<boolean>>;
}

export type InvoiceFormProp = {
    formState: FormInitialState,
    dispatchForm: (action: FORM_ACTIONTYPE) => void
}

export type FormInitialState = {
    billNo: string,
    name: string,
    status: string,
    dueDate: string,
    grossAmount: number | string,
    billDate:string,
    gstAmount: number | string,
    netAmount: number | string,
    notes: string,
    productName: string,
    price: number | string,
    quantity: number | string,
    gstRate: number | string,
    amount: number | string
    lineItem: {
        productName: string;
        quantity: number | string;
        amount: number | string;
        gstRate: number | string;
        price: number | string;
    }[]
}

export type FORM_ACTIONTYPE =
    | { type: "NAME_VALUE", payload: string } 
    | { type: "STATUS_VALUE", payload: string }
    | { type: "BILL_NO_VALUE", payload: string }
    | { type: "DUE_DATE_VALUE", payload: string }
    | { type: "GROSS_AMOUNT_VALUE", payload: string }
    | { type: "BILL_DATE_VALUE", payload: string }
    | { type: "GST_AMOUNT_VALUE", payload: string }
    | { type: "NET_AMOUNT_VALUE", payload: string }
    | { type: "NOTES_VALUE", payload: string }
    | { type: "PRODUCT_NAME_VALUE", payload: string }
    | { type: "QUANTITY_VALUE", payload: string }
    | { type: "PRICE_VALUE", payload: string }
    | { type: "GST_RATE_VALUE", payload: string }
    | { type: "AMOUNT_VALUE", payload: string }
    | { type: "REMOVE_LINE_ITEM", payload: string }
    | { type: "ADD_LINE_ITEM" }