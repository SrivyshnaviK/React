import React from "react";
import CustomLabel from "../atoms/Label";
import DeleteIcon from "../atoms/DeleteIcon";
import CheckIcon from '@material-ui/icons/Check';

function ListItem(props){
    //console.log({props});
    return (<div><CustomLabel id={props.item.key} value={props.item.text} onChange={(e) => {
        props.setUpdate(e.target.value, props.item.key);
    }} />
        <DeleteIcon name="Delete" onClick={() => {
        props.deleteItem(props.item.key);}}/>
        {props.item.marked && <CheckIcon  onClick={()=>{props.markAsDone(props.item.key);}}/>}
    </div>);
}
export default ListItem;