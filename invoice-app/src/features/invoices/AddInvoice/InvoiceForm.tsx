import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { styles } from "./AddInvoice.styles";
import { InvoiceFormProp } from "../../features.types";

export function InvoiceForm({ formState, dispatchForm }: InvoiceFormProp) {
  const {
    name,
    billNo,
    status,
    dueDate,
    billDate,
    grossAmount,
    gstAmount,
    netAmount,
    notes,
    amount,
    gstRate,
    lineItem,
    price,
    productName,
    quantity,
  } = formState;

  return (
    <Stack alignItems={"center"}>
      <TextField
        sx={styles.fullTextField}
        label="Bill No."
        variant="outlined"
        value={billNo}
        onChange={(e) =>
          dispatchForm({ type: "BILL_NO_VALUE", payload: e.target.value })
        }
      />
      <Box sx={{ display: "flex" }}>
        <TextField
          sx={styles.textField}
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) =>
            dispatchForm({ type: "NAME_VALUE", payload: e.target.value })
          }
        />
        <TextField
          sx={styles.textField}
          label="Status"
          variant="outlined"
          value={status}
          onChange={(e) =>
            dispatchForm({ type: "STATUS_VALUE", payload: e.target.value })
          }
        />
      </Box>

      <Box>
        <TextField
          sx={styles.textField}
          type="date"
          label="Due Date"
          variant="outlined"
          value={dueDate}
          onChange={(e) =>
            dispatchForm({ type: "DUE_DATE_VALUE", payload: e.target.value })
          }
        />
        <TextField
          sx={styles.textField}
          type="date"
          label="Bill Date"
          variant="outlined"
          value={billDate}
          onChange={(e) =>
            dispatchForm({ type: "BILL_DATE_VALUE", payload: e.target.value })
          }
        />
      </Box>

      <Box>
        <TextField
          sx={styles.textField}
          type={"number"}
          value={grossAmount}
          label="Gross Amount"
          variant="outlined"
          onChange={(e) =>
            dispatchForm({
              type: "GROSS_AMOUNT_VALUE",
              payload: e.target.value,
            })
          }
        />
        <TextField
          sx={styles.textField}
          type={"number"}
          value={gstAmount}
          label="Gst Amount"
          variant="outlined"
          onChange={(e) =>
            dispatchForm({
              type: "GST_AMOUNT_VALUE",
              payload: e.target.value,
            })
          }
        />
      </Box>

      <TextField
        sx={styles.fullTextField}
        type={"number"}
        label="Net Amount"
        variant="outlined"
        value={netAmount}
        onChange={(e) =>
          dispatchForm({
            type: "NET_AMOUNT_VALUE",
            payload: e.target.value,
          })
        }
      />
      <TextField
        sx={styles.fullTextField}
        label="Notes"
        variant="outlined"
        value={notes}
        onChange={(e) =>
          dispatchForm({ type: "NOTES_VALUE", payload: e.target.value })
        }
      />

      <Box
        sx={{
          border: "solid 1px #fff",
          margin: "0.5rem 1.1rem",
          padding: "0.5rem",
          borderRadius: "0.4rem",
        }}
      >
        <Typography sx={{ margin: "0.5rem" }}>Add Line Items</Typography>
        {lineItem?.map((item, index) => {
          return (
            <Stack
              key={index}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              sx={{
                padding: "0.4rem 0.6rem",
                background: "#7c5dfa",
                borderRadius: "0.2rem",
                margin: "0.4rem",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>
                {item.productName}
              </Typography>
              <Button
                size={"small"}
                variant="text"
                sx={{ color: "#fff" }}
                onClick={() =>
                  dispatchForm({
                    type: "REMOVE_LINE_ITEM",
                    payload: item.productName,
                  })
                }
              >
                Remove
              </Button>
            </Stack>
          );
        })}
        <Box sx={{ display: "flex" }}>
          <TextField
            sx={styles.lineTextField}
            size="small"
            label="Product Name"
            variant="outlined"
            value={productName}
            onChange={(e) =>
              dispatchForm({
                type: "PRODUCT_NAME_VALUE",
                payload: e.target.value,
              })
            }
          />
          <TextField
            sx={styles.lineTextField}
            size="small"
            label="Quantity"
            type={"number"}
            variant="outlined"
            value={quantity}
            onChange={(e) =>
              dispatchForm({
                type: "QUANTITY_VALUE",
                payload: e.target.value,
              })
            }
          />
        </Box>

        <Box sx={{ display: "flex" }}>
          <TextField
            sx={styles.lineTextField}
            size="small"
            type={"number"}
            label="Price"
            variant="outlined"
            value={price}
            onChange={(e) =>
              dispatchForm({
                type: "PRICE_VALUE",
                payload: e.target.value,
              })
            }
          />
          <TextField
            sx={styles.lineTextField}
            size="small"
            type={"number"}
            label="GST %"
            variant="outlined"
            value={gstRate}
            onChange={(e) =>
              dispatchForm({
                type: "GST_RATE_VALUE",
                payload: e.target.value,
              })
            }
          />
        </Box>

        <TextField
          sx={styles.lineFullTextField}
          size="small"
          type={"number"}
          label="Amount"
          variant="outlined"
          value={amount}
          onChange={(e) =>
            dispatchForm({
              type: "AMOUNT_VALUE",
              payload: e.target.value,
            })
          }
        />
        <Button
          size={"small"}
          sx={{
            fontWeight: "bold",
            display: "flex",
            margin: "0.5rem auto",
          }}
          variant="contained"
          onClick={() => dispatchForm({ type: "ADD_LINE_ITEM" })}
        >
          Add Line Item
        </Button>
      </Box>
    </Stack>
  );
}
