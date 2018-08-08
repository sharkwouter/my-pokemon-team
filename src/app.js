import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import {appStyles} from './styles'
import Cards from './components/cards'

export default withStyles(appStyles)(props => (
    /*
    * All 9 Cards
    * apparently there's a slight horizontal scroll if I don't set the width and margin for <Grid />
    * the original width for <Grid /> was calc(100% + 24px)
    */
    <Grid container spacing={16} justify='center' alignItems='center' className={props.classes.root}>
      {/* Header */}
      <Grid item xs={12}>
        <Typography variant='display2' align='center'>
          Poke Builder
        </Typography>
      </Grid>
      {/* Main */}
      <Cards />
      {/* Footer */}
      <Grid item xs={12}>
        <Typography variant='body1' align='center'>
          Created by Jeffery Tang
        </Typography>
      </Grid>
    </Grid>
))