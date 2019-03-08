import React from 'react'
// Material UI Core Imports
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

class UpdateLog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {isDialogOpen: false}
  }

  toggleDialog = () => this.setState({isDialogOpen: !this.state.isDialogOpen})

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.toggleDialog} style={{fontWeight: 'initial', textTransform: 'initial'}}>
          Updated Mar 4, 2019
        </Button>
        <Dialog
          open={this.state.isDialogOpen}
          onClose={this.toggleDialog}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>
            Update Log
          </DialogTitle>
          <DialogContent>
            <h4>Feb 25, 2019</h4>
            <p>Fixed a bug where alternate formes had the moveset of their base forme. For example, White Kyurem couldn't learn Fusion Flare (<a href='https://www.reddit.com/r/pokemon/comments/aumnvh/brand_new_ultra_sun_and_moon_team_builder/eh95wr3'>DMSivally</a>).</p>
            <p>Fixing the above bug caused selecting Megas to break the app. This is fixed too now (<a href='https://www.reddit.com/r/pokemon/comments/aumnvh/brand_new_ultra_sun_and_moon_team_builder/eha3o9p'>kwiszat</a>).</p>
            <h4>Mar 6, 2019</h4>
            <p>Super effective STAB moves now count for +2 instead of +1.</p>
            <h4>Mar 8, 2019</h4>
            <p>Updated the Smogon tiers (for the search filters).</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.toggleDialog} color='primary'>
              Go Back
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    )
  }
}

export default UpdateLog