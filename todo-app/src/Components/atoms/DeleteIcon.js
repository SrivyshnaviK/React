import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

const useStyles = makeStyles({
  root: {
    margin: '40px',
    marginLeft: '5px',
    marginTop:'50px',
    fontSize:'large',
  },
});

function DeleteIcon(props){
  const classes = useStyles();
    return (<DeleteRoundedIcon onClick={props.onClick}>
    {props.name}
  </DeleteRoundedIcon>);
}
export default DeleteIcon;