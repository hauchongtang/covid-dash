import React from 'react';
import { AppBar, Toolbar, Typography, Button, Paper } from '@material-ui/core';
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
    backgroundColor: 'rgb(92, 219, 149, 0.2)'
  },
  title: {
    flexGrow: 1,
    textAlign: 'start',
    paddingLeft: 'inherit'
  }
})

const TopBar = () => {
  const styles = useStyles();

  const reloadPage = () => window.location.reload(false)

  return (
    <>
      <AppBar position='static' color='transparent' elevation={0} className={styles.root}>
        <Toolbar>
          <Typography variant='h6' className={styles.title}>
            <span role="img" aria-label="grinning face" id="rise trend">𝗖𝗢𝗩𝗜𝗗🦠𝗧𝗥𝗔𝗖𝗞𝗘𝗥</span>
          </Typography>

          <Button size='large' href=' #/' color='secondary' className={styles.current}>
            Home
              </Button>
          <Button size='large' href=' #/globe' color='secondary' className={styles.current}>
            Globe
              </Button>
          <Button size='large' href=' #/singapore' color='secondary' className={styles.current}>
            Singapore
            </Button>
          <Button size='large' href=' #/summary' color='secondary' className={styles.current}>
            Summary
              </Button>

          <Button size='large' href=' #/news' color='secondary' className={styles.current}>
            News
              </Button>

          <Button size='large' href=' #/about' color='secondary' className={styles.current}>
            About
              </Button>

          <Button size='large' onClick={() => reloadPage()} color='secondary' className={styles.current}>
            <span role="img" aria-label="grinning face" id="rise trend">🔄</span>
          </Button>

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