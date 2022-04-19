import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import foto from './images/imagem1.jpg'
import {  
  TextField,
  Divider,
  Button
} from "@mui/material";
//import { Button } from 'bootstrap';


export default function Perfil() {
  return(
    <div>
       <Stack style={{marginLeft: "9rem", marginTop: "2rem"}} direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src={foto}
        sx={{ width: 125, height: 125 }}
      />
    </Stack>
      <Divider style={{marginTop: "2rem"}}/>
      <br/>
      
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#FFF', height: '100vh' }}>
        <TextField fullWidth label="Nome" type="text"/>
        <TextField fullWidth style={{marginTop: "1rem"}} label="E-mail" type="email"/>
        <TextField fullWidth style={{marginTop: "1rem"}} label="Telefone" type="number"/>
        <TextField fullWidth style={{marginTop: "1rem"}} label="Senha" type="password"/>
        <Button fullWidth style={{marginTop: "1rem"}} variant="contained">Cofirmar</Button>
        </Box>
      </Container>
    </React.Fragment>
    </div>
  )
}