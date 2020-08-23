import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, MenuIcon } from '@material-ui/core'

import styles from './TopBar.module.css';

const TopBar = () => {
  const handleClick = () => {
    window.location.href = "https://thchong-code.github.io/covid-dash/";
  }
  return (
    <div className={styles.root}>
      <AppBar position="static" style={{ background: '#639ACE' }}>
        <Toolbar variant='dense'>
          <Typography variant="h6" className={styles.title}>
            COVID-19-DASH
        </Typography>
          <Button onClick={handleClick} className={styles.button} color="inherit">🔄</Button>
        </Toolbar>

      </AppBar>
    </div>
  )
}

export default TopBar;