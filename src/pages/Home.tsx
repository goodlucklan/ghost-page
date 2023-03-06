import { Button, Card } from "@mui/material";
import React, { useState } from "react";
import { FormRegister } from "../components/FormRegister";

export const Home = () => {
  console.log("aca");
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Card sx={{ minWidth: 275, margin: 10, padding: 5 }}>
        <Button variant="contained" onClick={() => setOpenModal(true)}>
          Registrate
        </Button>
      </Card>
      <FormRegister open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};
