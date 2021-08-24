import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    root: {
      margin: '40px',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
    },
  });

function CustomInput(props){
    const classes = useStyles();
    return (<TextField id="outlined-basic" autoComplete="off" className={classes.root} label="Add your Work" variant="outlined"  value={props.value} onChange={props.onChange}/>);
}
export default CustomInput;