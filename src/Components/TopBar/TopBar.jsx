import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'rgb(92, 219, 149, 0.2)',
    padding: '0% !important',
    margin: '0% !important'
  },
  root1: {
    padding: '1%',
    textAlign: 'justify',
    marginTop: '0% !important',
    // marginBottom: '1% !important',
    // borderRadius: '12px',
    backgroundColor: 'rgb(92, 219, 149, 0.2)'
  }
})

const TopBar = () => {
  const styles = useStyles();

  return (
    <>
      <AppBar position='static' color='transparent' elevation={0} className={styles.root}>
        <Toolbar>
          <Grid
            justify='space-evenly'
            container
            spacing={3}>
            <Grid item>
              <Button href='#/' className={styles.button} color="inherit">
                <Typography variant='h6'>
                  <span role="img" aria-label="grinning face" id="rise trend">𝗖𝗢𝗩𝗜𝗗🦠𝗧𝗥𝗔𝗖𝗞𝗘𝗥</span>
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button size='large' href=' #/' color='inherit' className={styles.current}>
                Home
              </Button>
            </Grid>
            <Grid item>
              <Button size='large' href=' #/singapore' color='inherit' className={styles.current}>
                Singapore
              </Button>
            </Grid>
            <Grid item>
              <Button size='large' href=' #/summary' color='inherit' className={styles.current}>
                Summary
              </Button>
            </Grid>
            <Grid item>
              <Button size='large' href=' #/news' color='inherit' className={styles.current}>
                News
              </Button>
            </Grid>
            <Grid item>
              <Button size='large' href=' #/about' color='inherit' className={styles.current}>
                About
              </Button>
            </Grid>
          </Grid >
        </Toolbar >
      </AppBar >
      <Paper elevation={0} className={styles.root1}>
        <Typography variant='button'>
          For the latest travel advisories visit
          <Button color='secondary' href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/travel-advice' target="_blank">World Health Organisation</Button>
        </Typography>
      </Paper>
    </>
  )
}

export default TopBar;