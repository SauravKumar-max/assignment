import React from "react";
import { Skeleton } from "@mui/material";
import { styles } from "./Skeleton.styles";

export function InvoiceListSkeleton() {
  const skeletonSize = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {skeletonSize.map((i) => {
        return (
          <Skeleton key={i} variant="rectangular" sx={styles.skeletonItem} />
        );
      })}
    </>
  );
}
