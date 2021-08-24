import React from 'react';
import Button from '@material-ui/core/Button';

function CustomButton(props){
    return (<Button {...props} variant="contained" color={props.color} onClick={props.onClick}>
    {props.name}
  </Button>);
}
export default CustomButton