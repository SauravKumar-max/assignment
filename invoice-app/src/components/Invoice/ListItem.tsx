import React from "react";
import { Stack, Typography } from "@mui/material";
import { styles } from "./Invoice.styles";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { InvoiceItem } from "../components.types";
import { checkStatus, formatedDate } from "../../utils/Invoice.utils";
import { useNavigate } from "react-router-dom";

export function InvoiceListItem({ index, item }: InvoiceItem) {
  const navigate = useNavigate();
  const { _id, name, status, dueDate, netAmount } = item;
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={styles.itemContainer}
      onClick={() => navigate(`/invoice/${_id}`)}
    >
      <Typography sx={styles.boldText}>{index}.</Typography>
      <Typography sx={styles.lightText}>
        <span style={{ marginRight: "1rem" }}>Due</span>
        <span>{formatedDate(dueDate)}</span>
      </Typography>
      <Typography sx={styles.boldText}>{name}</Typography>
      <Stack direction={"row"} alignItems={"center"}>
        <CurrencyRupeeIcon sx={{ fontSize: 23 }} />
        <Typography sx={styles.price}>{netAmount}</Typography>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        color={checkStatus(status) ? "#33d69f" : "orange"}
        spacing={1}
      >
        <FiberManualRecordIcon sx={{ fontSize: 12 }} />
        <Typography sx={{ fontSize: "0.9rem" }}>{status}</Typography>
      </Stack>
    </Stack>
  );
}
