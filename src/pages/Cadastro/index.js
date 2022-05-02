import { TextField, Button, Divider } from "@mui/material"
import './cadastro.css'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';



export default function Cadastro(){
    return (
    <div className="cadastro">
        <Divider><h1>Criar conta</h1></Divider>
    <TextField fullWidth label="Nome" type="name"/><br/><br/>
    <TextField fullWidth label="Email" type="email"/><br/><br/>
    <TextField fullWidth label="Senha" type="password"/><br/><br/>
    <TextField fullWidth label="Telefone" type="tell"/><br/><br/>
    <Button fullWidth variant="contained">Cadastrar</Button>

    
    </div>

    )
    }