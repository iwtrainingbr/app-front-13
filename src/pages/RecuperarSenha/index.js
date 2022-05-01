import *as React from 'react';
import { TextField, Button } from "@mui/material"

export default function RecuperarSenha() {
  return (
    <div align="center">
     <h1>Recuperar senha</h1>
     <p>Informar Email</p> 
     <TextField fullWidth label="Email" type="email"/>
     
      <Button fullWidth style={{marginTop: "1rem"}}variant="contained">Enviar</Button>
      
    </div>
  )
}