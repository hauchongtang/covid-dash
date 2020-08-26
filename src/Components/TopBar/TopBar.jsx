import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
})

const TopBar = () => {
  const styles = useStyles();
  return (
    <>
      <AppBar position='static' color='transparent' elevation={0}>
        <Toolbar>
          <Grid
            justify='space-evenly'
            container
            spacing={3}>
            <Grid item>
              <Button href='#/' className={styles.button} color="inherit">
                <Typography variant='h6'>
                  𝗖𝗢𝗩𝗜𝗗🦠𝗧𝗥𝗔𝗖𝗞𝗘𝗥
            </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button size='large' href=' #/' color='inherit'>
                World
              </Button>
            </Grid>
            <Grid item>
              <Button size='large' href=' #/singapore' color='inherit'>
                Singapore
              </Button>
            </Grid>
            <Grid item>
              <Button size='large' href=' #/summary' color='inherit'>
                Summary
              </Button>
            </Grid>
            <Grid item>
              <Button size='large' href=' #/news' color='inherit'>
                News
              </Button>
            </Grid>
            <Grid item>
              <Button size='large' href=' https://github.com/thchong-code/covid-dash' color='inherit'>
                Github
              </Button>
            </Grid >
            <Grid item>
              <Button size='large' href=' https://thchong-code.github.io/portfolio-webpage/#/' color='inherit'>
                Contact
              </Button>
            </Grid >
          </Grid >
        </Toolbar >
      </AppBar >
    </>
  )
}

export default TopBar;