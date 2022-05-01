import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import Profile from './profile.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';

import './support.css';


export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (

    <div className="page-support">

      <h1> - SOBRE NÓS - </h1>

      <hr/>
      
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          
        <Typography className='typo'>Quem somos nós</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Aplicativo para melhorar funcionalidade do nosso aluno, pensando em seu conforto e bem estar.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >

          <Typography>
            Idealizadores
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

          <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src={Profile}/>
          <p>João TikToker</p>
          <InstagramIcon/>
          </Stack>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography>
           Suporte
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>Para dúvidas ou informações contacte-nos através no email:<a href="url">  front13foverever@gmail.com</a></p>
          </Typography>
        </AccordionDetails>
      </Accordion>
  
    </div>
  );
}
