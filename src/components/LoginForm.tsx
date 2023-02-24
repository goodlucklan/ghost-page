import React from "react";
import Dialog from "@mui/material/Dialog";
import { Box, Button, DialogTitle, Divider, TextField } from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const LoginForm: React.FC<Props> = (props) => {
  const { open, onClose } = props;
  return <Dialog open={open} onClose={onClose} sx={{ minWidth: 275 }}></Dialog>;
};
