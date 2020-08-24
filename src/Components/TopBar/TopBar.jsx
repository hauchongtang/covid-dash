import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'

import styles from './TopBar.module.css';

const TopBar = () => {
  return (
    <div className={styles.root}>
      <AppBar position="static" style={{ background: '#639ACE' }}>
        <Toolbar variant='dense'>
          <Button href='#/' className={styles.button} color="inherit">
            <Typography variant="h6" className={styles.title}>
              COVID-19-DASH
            </Typography>
          </Button>
          <Button href=' #/' color='inherit'>
            World
          </Button>
          <Button href='#/singapore' color='inherit'>
            Singapore
          </Button>
          <Button href='#/summary' color='inherit'>
            Summary
          </Button>
          <Button href='#/news' color='inherit'>
            News
          </Button>
          <Button href='https://github.com/thchong-code/covid-dash' color='inherit'>
            Github
          </Button>
          <Button href='https://thchong-code.github.io/portfolio-webpage/#/' color='inherit'>
            My Website
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopBar;