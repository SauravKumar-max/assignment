import React, { useReducer, useState } from "react";
import {
  Backdrop,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { AddInvoicePropType } from "../../features.types";
import { InvoiceForm } from "./InvoiceForm";
import { styles } from "./AddInvoice.styles";
import { formReducer, initialState } from "../../../utils/formReducer";
import axios from "axios";
import { useAppDispatch } from "../../../app/hooks";
import { addNewInvoice } from "../invoiceSlice";

export function AddInvoice({ openDialog, setOpenDialog }: AddInvoicePropType) {
  const dispatch = useAppDispatch();
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, dispatchForm] = useReducer(formReducer, initialState);
  const {
    name,
    dueDate,
    grossAmount,
    billNo,
    billDate,
    lineItem,
    gstAmount,
    netAmount,
    notes,
    status,
  } = formState;

  async function addInvoice() {
    setLoader(true);
    try {
      const api = "https://rscdev.taxadda.com/api/invoice/add";
      const response = await axios.post(api, {
        name,
        dueDate,
        grossAmount,
        billNo,
        billDate,
        lineItem,
        gstAmount,
        netAmount,
        notes,
        status,
      });
      const { invoice } = response.data;
      dispatch(addNewInvoice({ invoice }));
      setLoader(false);
    } catch (error) {
      console.error(error);
      setErrorMessage("Error Occured. Please Try Again!");
      setLoader(false);
    }
  }

  function handleCloseDialog() {
    setOpenDialog(false);
  }

  function handleAddInvoice() {
    addInvoice();
  }

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" sx={styles.background}>
          Add Invoice
          <span style={{ color: "red", fontSize: "1rem" }}>
            {errorMessage && " : " + errorMessage}
          </span>
        </DialogTitle>
        <DialogContent sx={styles.background}>
          <InvoiceForm formState={formState} dispatchForm={dispatchForm} />
        </DialogContent>
        <DialogActions sx={styles.background}>
          <Button
            variant="contained"
            sx={styles.boldText}
            onClick={handleCloseDialog}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={styles.boldText}
            onClick={handleAddInvoice}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
