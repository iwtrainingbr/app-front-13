import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function Home() {
  return (
  
    
    <div align="center">

      <h1>BEM VINDO CROSSFITEIRO!!!</h1>
      
      <span>
        <strong>
          "Um atleta não pode chegar à competição muito motivado se nunca foi posto à prova."
        </strong> 
        
      </span>
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
      <ButtonGroup variant="text" aria-label="text button group">
        <Button>Ontem</Button>
        <Button>Hoje</Button>
        <Button>Amanhã</Button>
      </ButtonGroup>
    </Box>

    </div>
  )
}
