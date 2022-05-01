import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import foto from './images/imagem1.jpg';
import {  
  TextField,
  Divider,
  Button
} from "@mui/material";
import '../Perfil/css/FotoCentro.css';

//import { Button } from 'bootstrap';

// marginLeft: "9rem", marginTop: "2rem"
export default function Perfil() {
  return(
    <div>
       <Stack className='centro'>
      <Avatar
        alt="Remy Sharp"
        src={foto}
        sx={{ width: 125, height: 125 }}
      />
    </Stack>
      <br/>
      
      <Container maxWidth="sm">
      <Divider style={{marginTop: "2rem"}}/>
      </Container>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Divider style={{marginTop: "2rem"}}/>
        <Box sx={{ bgcolor: '#FFF', height: '100vh' }}>
        <TextField fullWidth label="Nome" type="text"/>
        <TextField fullWidth style={{marginTop: "1rem"}} label="E-mail" type="email"/>
        <TextField fullWidth style={{marginTop: "1rem"}} label="Telefone" type="number"/>
        <TextField fullWidth style={{marginTop: "1rem"}} label="Senha" type="password"/>
        <Button fullWidth style={{marginTop: "1rem"}} variant="contained">Confirmar</Button>
        </Box>
      </Container>
    </React.Fragment>
    </div>
  )
}