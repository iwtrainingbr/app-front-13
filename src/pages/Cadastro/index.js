import { TextField, Button } from "@mui/material"
import './cadastro.css'
export default function Cadastro(){
    return (
    <div className="cadastro">
    <TextField fullWidth label="Nome" type="name"/><br/><br/>
    <TextField fullWidth label="Email" type="email"/><br/><br/>
    <TextField fullWidth label="Senha" type="password"/><br/><br/>
    <TextField fullWidth label="Telefone" type="tell"/><br/><br/>
    <Button fullWidth variant="contained">Envia</Button>

    
    </div>

    )
    }