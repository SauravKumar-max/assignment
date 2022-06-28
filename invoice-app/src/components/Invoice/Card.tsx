import React from "react";
import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { InvoicesData } from "../../features/features.types";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { checkStatus, formatedDate } from "../../utils/Invoice.utils";
import { styles } from "./Invoice.styles";

export function InvoiceCard({ invoice }: { invoice: InvoicesData }) {
  const { name, status, billDate, dueDate, lineItem, netAmount, notes } =
    invoice || {};

  return (
    <Box sx={styles.cardContainer}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <Typography sx={styles.lightText}>Status </Typography>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            color={status && checkStatus(status) ? "#33d69f" : "orange"}
            spacing={1}
          >
            <FiberManualRecordIcon sx={{ fontSize: 12 }} />
            <Typography sx={{ fontSize: "0.9rem" }}>{status}</Typography>
          </Stack>
        </Stack>
        <a
          style={styles.link}
          href="https://mail.google.com/mail/u/0/?fs=1&to=example@gmail.com&su=Invoice&body=Your payment is due.&tf=cm"
          target={"_blank"}
          rel="noreferrer"
        >
          Send Mail
        </a>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={2}
        marginTop={"3rem"}
      >
        <Box>
          <Typography sx={styles.lightText}>Invoice Date </Typography>
          <Typography sx={styles.boldText}>{formatedDate(billDate)}</Typography>
        </Box>
        <Box>
          <Typography sx={styles.lightText}>Payment Date </Typography>
          <Typography sx={styles.boldText}>{formatedDate(dueDate)}</Typography>
        </Box>
        <Box>
          <Typography sx={styles.lightText}>Bill To</Typography>
          <Typography sx={styles.boldText}>{name}</Typography>
        </Box>
        <Box>
          <Typography sx={styles.lightText}>Email</Typography>
          <Typography sx={styles.boldText}>example@gmail.com</Typography>
        </Box>
      </Stack>

      <Box sx={{ margin: "1rem 0" }}>
        <Typography sx={styles.lightText}>Notes</Typography>
        <Box sx={{ margin: "0.2rem 0", fontSize: "0.9rem" }}>
          {notes ? notes : "_"}
        </Box>
      </Box>

      {lineItem?.length > 0 && (
        <TableContainer>
          <Table aria-label="simple table" sx={styles.table}>
            <TableHead>
              <TableRow>
                <TableCell sx={styles.boldText}>Product</TableCell>
                <TableCell align="right" sx={styles.boldText}>
                  Qty
                </TableCell>
                <TableCell align="right" sx={styles.boldText}>
                  Price
                </TableCell>
                <TableCell align="right" sx={styles.boldText}>
                  GST
                </TableCell>
                <TableCell align="right" sx={styles.boldText}>
                  Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lineItem?.map(
                ({ _id, amount, gstRate, price, productName, quantity }) => (
                  <TableRow key={_id}>
                    <TableCell component="th" scope="row">
                      {productName}
                    </TableCell>
                    <TableCell align="right">{quantity}</TableCell>
                    <TableCell align="right">{price}</TableCell>
                    <TableCell align="right">{gstRate}%</TableCell>
                    <TableCell align="right">{amount}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Stack
        direction={"row"}
        sx={{ margin: "2rem 1rem 0.5rem 1rem" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={4}
      >
        <Typography align="right" sx={styles.lightText}>
          Amount Due{" "}
        </Typography>
        <Typography align="right" sx={styles.largeText}>
          Rs. {netAmount}
        </Typography>
      </Stack>
    </Box>
  );
}
