import { TextField, Button } from "@mui/material"
import './login.css';


export default function Login() {
  return (
    <div align="center">
     <h1>login</h1> 

      <TextField className="login" fullWidth label="Email" type="email"/>
      <TextField className="login" fullWidth label="Senha" type="password"/>
      <Button fullWidth variant="contained">Entrar</Button>
      <h3>Esqueceu a senha?</h3>
      <Button fullWidth variant="text">Recuparar senha</Button>
      <h3>Não tem conta? Criar conta</h3>
      <Button fullWidth variant="text">Criar conta</Button>
      
    </div>
  )
}
