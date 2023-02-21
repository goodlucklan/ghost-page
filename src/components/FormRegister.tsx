import React from "react";
import Dialog from "@mui/material/Dialog";
import {
  Box,
  Button,
  Card,
  DialogTitle,
  Divider,
  FormControl,
  Input,
  InputLabel,
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

        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple" >
            Identidad de usuario
          </InputLabel>
          <Input id="component-simple" fullWidth/>
        </FormControl>
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
