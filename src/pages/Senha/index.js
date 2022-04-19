import { TextField, Button } from "@mui/material"

export default function Report() {
    return(
      <div>
      <h1>Recuperar Senha</h1>
      <TextField style={{marginBottom: 10}} label="Digite seu email" type="email" fullWidth/>
      
      <Button variant="outlined" fullWidth >Salvar</Button>

      <br/>
      
      </div>
    )
}
