import { TextField } from "@mui/material";
import { Button } from "@mui/material";
export default function Cadastro() {
    return (
      <div>
        <h1>Cadastramento</h1>
        <hr/>
        <TextField label="Nome" type="nome"/><br/><br/>
        <TextField label="Senha" type="password"/><br/><br/>
        <TextField label="Email" type="email"/><br/><br/>
        <TextField label="Telefone"/><br/><br/>

        <Button variant="contained" color="success">Enviar</Button>
 
      </div>
    )
  }
  