import * as React from 'react';
import fotos from './CROSS.png';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

import './Home.css';

export default function Home() {
  return (
    <div className="page-home"  align="center">

      <h1>BEM-VINDO <span style={{color:"gray"}}>CROSSFITEIRO!!!</span></h1>
      <p>
        <strong>
          "Um atleta não pode chegar à competição muito motivado se nunca foi posto à prova."
        </strong>
      </p>
        <Box
      sx={{
        margin: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button>Ontem</Button>
          <Button>Hoje</Button>
          <Button>Amanhã</Button>
      </ButtonGroup>
    </Box>

    <img src={fotos} alt="foto" />

    </div>
  )
}
