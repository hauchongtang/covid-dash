import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { autoPlay } from 'react-swipeable-views-utils';

import TopBar from '../TopBar/TopBar';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const screenshots = [
  {
    label: 'Overview',
    imgPath:
      'https://user-images.githubusercontent.com/56034480/92934048-97030880-f479-11ea-8ca3-07052987f138.jpg',
  },
  {
    label: 'Globe View',
    imgPath:
      'https://user-images.githubusercontent.com/56034480/92934036-94a0ae80-f479-11ea-94d3-2614d8137e10.jpg',
  },
  {
    label: 'Table View',
    imgPath:
      'https://user-images.githubusercontent.com/56034480/92934059-9a968f80-f479-11ea-830b-9d61b8180f71.jpg',
  },
  {
    label: 'News Section',
    imgPath:
      'https://user-images.githubusercontent.com/56034480/92934055-98cccc00-f479-11ea-94d1-deadd2d36528.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  h1: {
    margin: '8px',
    fontSize: '36px'
  },
  h2: {
    textAlign: 'justify',
    marginLeft: '22%',
    fontFamily: 'helvetica'
  },
  root: {
    width: '60%',
    flexGrow: 1,
    marginLeft: '20%'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    // height: 255,
    display: 'block',
    // maxWidth: 900,
    overflow: 'hidden',
    width: '100%',
    height: '100%'
  }
})
);

const Landing = () => {
  const styles = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = screenshots.length;

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
    <>
      <TopBar />
      <h1 className={styles.h1}><span role="img" aria-label="grinning face" id="rise trend">𝗖𝗢𝗩𝗜𝗗🦠𝗧𝗥𝗔𝗖𝗞𝗘𝗥</span></h1>
      <div className={styles.root}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {screenshots.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={styles.img} src={step.imgPath} alt={step.label} />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <Paper square elevation={0} className={styles.header}>
          <Typography>{screenshots[activeStep].label}</Typography>
        </Paper>
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
          }
        />
      </div>
      <h2 className={styles.h2}>A Data Rich Dashboard&nbsp;<Button color='secondary' href='#/home'>Try it now!</Button></h2>
      <div className={styles.root}>
        <List column>
          <ListItem button>
            <ListItemText primary="- Interactive" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="- See yesterday's data and compare it with today" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="- Hover and click the charts to see in depth information" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="- Filter data by clicking on the legend on our charts!" />
          </ListItem>
        </List>
      </div>
    </>
  )
}

export default Landing;