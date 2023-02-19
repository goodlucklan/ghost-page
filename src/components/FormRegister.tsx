import React from "react";
import Dialog from "@mui/material/Dialog";
import { Button, Card, DialogTitle, Divider, TextField } from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const FormRegister: React.FC<Props> = (props) => {
  const { open, onClose } = props;
  return (
    <Dialog open={open} onClose={onClose} sx={{ minWidth: 275 }}>
      <Card sx={{ padding: 4, margin: 4 }} variant="outlined">
      <DialogTitle>Registrate</DialogTitle>
        <TextField
          required
          id="outlined-required"
          label="Required"
          placeholder="Identidad de usuario"
          sx={{ padding: 1 }}
          fullWidth
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          placeholder="Nombre"
          sx={{ padding: 1 }}
          fullWidth
        />
        <TextField
          type={"password"}
          id="outlined-required"
          label="Required"
          placeholder="Ingresa tu Contraseña"
          sx={{ padding: 1 }}
          fullWidth
        />
        <TextField
          type={"password"}
          id="outlined-required"
          label="Required"
          placeholder="Repite la Contraseña"
          sx={{ padding: 1 }}
          fullWidth
        />
        <TextField
          type={"email"}
          required
          id="outlined-required"
          label="Required"
          placeholder="Ingrese su correo"
          sx={{ padding: 1 }}
          fullWidth
        />
        <Divider/>
        <Button sx={{marginTop: 4}} type="button" variant="contained" fullWidth>Aceptar</Button>
      </Card>
    </Dialog>
  );
};
