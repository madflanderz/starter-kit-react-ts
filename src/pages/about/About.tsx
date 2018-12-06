import * as React from 'react'
// import Button from '../../components/Button'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import CameraIcon from '@material-ui/icons/PhotoCamera'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'

const styles = ({ palette, spacing, breakpoints }: Theme) =>
  createStyles({
    heroUnit: {
      backgroundColor: palette.background.paper,
    },
    heroContent: {
      maxWidth: 600,
      margin: '0 auto',
      padding: `${spacing.unit * 8}px 0 ${spacing.unit * 6}px`,
    },
    heroButtons: {
      marginTop: spacing.unit * 4,
    },
    layout: {
      width: 'auto',
      marginLeft: spacing.unit * 3,
      marginRight: spacing.unit * 3,
      [breakpoints.up(1100 + spacing.unit * 3 * 2)]: {
        width: 1100,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    cardGrid: {
      padding: `${spacing.unit * 8}px 0`,
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  })

interface Props {
  // name: string
  classes?: any
}

const About = ({ classes }: Props) => (
  <div>
    <div className={classes.heroUnit}>
      <div className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          About Page
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          This page is lazy loaded. You can check this in chrome devtools with slow 3G connection.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={16} justify="center">
            <Grid item>
              <Link to="/">
                <Button variant="contained" color="primary">
                  back to HOME
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  </div>
)

export default withStyles(styles)(About)
