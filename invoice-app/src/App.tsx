import React, { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
import { getAllInvocies } from "./features/invoices/invoiceSlice";
import { Routes, Route } from "react-router-dom";
import { Home, Invoice } from "./page";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllInvocies());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoice/:id" element={<Invoice />} />
      </Routes>
    </div>
  );
}

export default App;
