import { TextField, Button } from "@mui/material"

export default function Login() {
  return (
    <div align="center">
     <h1>login</h1> 

      <TextField fullWidth label="Email" type="email"/>
      <TextField fullWidth label="Senha" type="password"/>
      <Button fullWidth variant="outlined">Clique aqui</Button>
      
    </div>
  )
}
