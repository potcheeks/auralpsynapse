import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          au{bull}ral{bull}psy{bull}nap{bull}se
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          verb
        </Typography>
        <Typography variant="body2" component="p">
        A pulsating beat of neurons in aural pleasure.
          <br />
          {'"dude it was an aural psynapse over the weekend."'}
        </Typography>
      </CardContent>
    </Card>
  );
}