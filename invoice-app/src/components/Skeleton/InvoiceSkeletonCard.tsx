import { Skeleton } from "@mui/material";
import React from "react";
import { styles } from "./Skeleton.styles";

export function InvoiceSkeletonCard() {
  return <Skeleton variant="rectangular" sx={styles.skeletonCard} />;
}
