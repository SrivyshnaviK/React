import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    margin: '40px',
    marginLeft: '2px',
    marginTop:'50px',
    background: 'orange',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(100, 105, 135, .3)',
    color: 'white',
    height: 40,
    padding: '0 30px'
  },
});

function CustomButton(props){
  const classes = useStyles();
    return (<Button className={classes.root} variant="contained" color="primary"  onClick={props.onClick}>
    {props.name}
  </Button>);
}
export default CustomButton;