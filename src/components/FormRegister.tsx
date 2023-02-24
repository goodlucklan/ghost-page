import React from "react";
import Dialog from "@mui/material/Dialog";
import {
  Box,
  Button,
  DialogTitle,
  Divider,
  TextField,
} from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const FormRegister: React.FC<Props> = (props) => {
  const { open, onClose } = props;
  return (
    <Dialog open={open} onClose={onClose} sx={{ minWidth: 275 }}>
      <Box component={"form"} sx={{ padding: 4, margin: 4 }}>
        <DialogTitle>Registrate</DialogTitle>

        <TextField
          id="outlined-required"
          placeholder="Identidad del usuario"
          sx={{ padding: 1 }}
          fullWidth
        />
        <TextField
          id="outlined-required"
          placeholder="Nombre"
          sx={{ padding: 1 }}
          fullWidth
        />
        <TextField
          type={"password"}
          id="outlined-required"
          placeholder="Ingresa tu Contraseña"
          sx={{ padding: 1 }}
          fullWidth
        />
        <TextField
          type={"password"}
          id="outlined-required"
          placeholder="Repite la Contraseña"
          sx={{ padding: 1 }}
          fullWidth
        />
        <TextField
          type={"email"}
          id="outlined-required"
          placeholder="Ingrese su correo"
          sx={{ padding: 1 }}
          fullWidth
        />
        <Divider />
        <Button
          sx={{ marginTop: 4 }}
          type="button"
          variant="contained"
          fullWidth
        >
          Aceptar
        </Button>
      </Box>
    </Dialog>
  );
};
