import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { MicNone, NoEncryption } from "@material-ui/icons";
import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles({
    root: {
        marginLeft:'40px',
      marginBottom:'20px',
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height:30,
      padding: '0 30px',
      textUnderlineOffset: 0,
      backgroundColor: 'pink'
    },
  });

function CustomLabel(props){
    const classes = useStyles();
    //console.log(props.value)
    return (<TextField className={classes.root} InputProps={{ disableUnderline: true }}  id={props.id.toString()} value={props.value} onChange={props.onChange}/>);
}
export default CustomLabel;