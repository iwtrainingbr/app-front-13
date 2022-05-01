import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './Tutorial.css';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Treine com o melhor em MOTIVAÇÃO.',
    imgPath:
      'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  },
  {
    label: 'Treine com o melhor em ESTRUTURA.',
    imgPath:
      'https://images.pexels.com/photos/28080/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  },
  {
    label: 'Treine com o melhor em COACHES.',
    imgPath:
      'https://images.pexels.com/photos/931321/pexels-photo-931321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
];


export default function Tutorial() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    
    <Box className="body-tutorial" align="center" sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper 
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography className="label-tutorial" align='center'>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
      className="images-tutorial"
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper className='buttons-tutorial'
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Próxima
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Anterior
          </Button>
        }
      />
    </Box>
   
  );
}

