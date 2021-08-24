import React from 'react';
import ListItem from '../molecules/ListItem';

function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
             <ListItem {...props} item={item}/>
        </div>;
    });
    return  (<div><h3>TodoList</h3>
                {listItems}
            </div>);
}
export default ListItems;