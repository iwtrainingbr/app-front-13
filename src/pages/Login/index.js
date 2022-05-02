import { TextField, Button } from "@mui/material"
import './login.css';
import { Link } from "react-router-dom";
import Cadastro from "../Cadastro";
import bootstrap from "bootstrap";
import { FingerprintOutlined } from "@mui/icons-material";



export default function Login() {
  return (
    <div align="center">
     <h1>login</h1> 

      <TextField data="entrar" className="login" fullWidth label="Email" type="email"/>
      <TextField data="entrar" className="senha mt-2" fullWidth label="Senha" type="password"/>
      <Button fullWidthvariant="contained">Entrar</Button>
      <h3>Esqueceu a senha?</h3>
      <Button fullWidth  variant="text">Recuperar senha</Button>
      <h3>Não tem conta? Criar conta</h3>
      <Button fullWidth variant="text"><Link to="/cadastro"> Criar conta</Link></Button>
      
    </div>
  )
}
