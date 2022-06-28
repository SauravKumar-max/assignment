import React from "react";
import { Box, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { InvoiceCard, InvoiceSkeletonCard } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

export function Invoice() {
  const { invoices, status } = useAppSelector((state) => state.invoice);
  const { id } = useParams();
  const navigate = useNavigate();
  const findInvoice = invoices?.find((invoice) => invoice._id === id);

  return (
    <Box sx={{ margin: "0 1rem" }}>
      <Button
        size="small"
        variant="text"
        disableRipple
        sx={{ color: "#fff", fontWeight: "bold" }}
        startIcon={<ArrowBackIosIcon fontSize="small" color="primary" />}
        onClick={() => navigate("/")}
      >
        Go Back
      </Button>
      {status === "loading" || status === "idle" ? (
        <InvoiceSkeletonCard />
      ) : (
        <InvoiceCard invoice={findInvoice!} />
      )}
    </Box>
  );
}
