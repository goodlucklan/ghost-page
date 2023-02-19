import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { DialogTitle, TextField } from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const FormRegister: React.FC<Props> = (props) => {
  const { open, onClose } = props;
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Registrate</DialogTitle>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
      />
    </Dialog>
  );
};
