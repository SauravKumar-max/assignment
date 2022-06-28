import React from "react";
import { Box } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { InvoiceListSkeleton } from "../Skeleton/InvoiceListSkeleton";
import { InvoiceListItem } from "./ListItem";
import { styles } from "./Invoice.styles";

export function InvoiceList() {
  const { invoices, status } = useAppSelector((state) => state.invoice);
  return (
    <Box sx={styles.listContainer}>
      {status === "loading" && <InvoiceListSkeleton />}
      {invoices?.map((item, index) => {
        return (
          <InvoiceListItem
            key={item._id}
            index={invoices.length - index}
            item={item}
          />
        );
      })}
    </Box>
  );
}
