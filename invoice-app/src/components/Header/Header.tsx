import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { AddInvoice } from "../../features/invoices/AddInvoice/AddInvoice";
import { useAppSelector } from "../../app/hooks";
import { styles } from "./Header.styles";

export function Header() {
  const { invoices } = useAppSelector((state) => state.invoice);
  const [openDialog, setOpenDialog] = useState(false);

  function handleOpenDialog() {
    setOpenDialog(true);
  }
  return (
    <>
      <AddInvoice openDialog={openDialog} setOpenDialog={setOpenDialog} />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        margin={"1rem"}
      >
        <Box>
          <Typography variant="h2" sx={styles.text}>
            Invoices
          </Typography>
          <Typography variant="subtitle2" sx={styles.smallText}>
            There are {invoices ? invoices?.length : "0"} total invoices
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={styles.button}
          size="small"
          startIcon={<AddCircleIcon />}
          onClick={handleOpenDialog}
        >
          New Invoice
        </Button>
      </Stack>
    </>
  );
}
