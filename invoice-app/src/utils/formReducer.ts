import { FORM_ACTIONTYPE, FormInitialState } from "../features/features.types";
import { formatDefaultDate } from "./Invoice.utils";

export const initialState = {
    billNo: "",
    name: "",
    status: "",
    dueDate: formatDefaultDate(),
    billDate: formatDefaultDate(),
    grossAmount: 0,
    gstAmount: 0,
    netAmount: 0,
    notes: "",
    lineItem: [],
    productName: "",
    price: 0,
    quantity: 0,
    gstRate: 0,
    amount: 0

}

export function formReducer(initialState:FormInitialState, action: FORM_ACTIONTYPE){
    switch (action.type) {
        case "NAME_VALUE": 
            return { ...initialState, name: action.payload };
        
        case "STATUS_VALUE": 
            return { ...initialState, status: action.payload };
        
        case "BILL_NO_VALUE": 
            return { ...initialState, billNo: action.payload };

        case "BILL_DATE_VALUE": 
            return { ...initialState, billDate: action.payload };

        case "DUE_DATE_VALUE": 
            return { ...initialState, dueDate: action.payload };

        case "GROSS_AMOUNT_VALUE": 
            return { ...initialState, grossAmount: action.payload !== "" ? parseInt(action.payload, 10) : "" };

        case "GST_AMOUNT_VALUE": 
            return { ...initialState, gstAmount: action.payload !== "" ? parseInt(action.payload, 10) : ""  };
        
        case "NET_AMOUNT_VALUE": 
            return { ...initialState, netAmount: action.payload !== "" ? parseInt(action.payload, 10) : ""  };

        case "NOTES_VALUE": 
            return { ...initialState, notes: action.payload };

        case "PRODUCT_NAME_VALUE": 
            return { ...initialState, productName: action.payload };
        
        case "QUANTITY_VALUE": 
            return { ...initialState, quantity: action.payload };

        case "PRICE_VALUE": 
            return { ...initialState, price: action.payload !== "" ? parseInt(action.payload, 10) : ""  };

        case "GST_RATE_VALUE": 
            return { ...initialState, gstRate: action.payload !== "" ? parseInt(action.payload, 10) : ""  };

        case "AMOUNT_VALUE": 
            return { ...initialState, amount: action.payload !== "" ? parseInt(action.payload, 10) : ""  };

        case "ADD_LINE_ITEM": 
            const { productName, price, quantity, gstRate, amount } = initialState;
            return { 
                ...initialState,
                lineItem: [ ...initialState.lineItem, { productName, price, quantity, gstRate, amount }],
                productName: "", price: "", quantity: "", gstRate: "", amount: ""
            }
        
        case "REMOVE_LINE_ITEM": 
            return { ...initialState, lineItem: initialState.lineItem.filter(item => item.productName !== action.payload)}

        
        
        default:
            return initialState;
    }
}