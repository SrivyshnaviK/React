/* eslint-disable array-callback-return */
import React from "react";
import CustomButton from '../atoms/AddButton';
import CustomInput from "../atoms/Input";
import TodoList from "./TodoList";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: '',
                marked: true
            }
        };
        this.addItem = this.addItem.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
        this.markAsDone=this.markAsDone.bind(this);
    }
    handleInput(e,value) {
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Date.now(),
                marked: true
            }
        });
    }
    addItem(event) {
        event.preventDefault();
        const newItem = this.state.currentItem;
        //console.log('NewItem' + newItem.text)
        if (newItem.text !== "") {
            const items = [...this.state.items, newItem];
            this.setState({
                items: items,
                currentItem: {
                    text: '',
                    key: '',
                    marked: true
                }
            });
        }
    }
    deleteItem(key) {
        const filteredItems = this.state.items.filter(item =>
            item.key !== key);
        this.setState({
            items: filteredItems
        });

    }
    setUpdate(text, key) {
        console.log("items:" + this.state.items);
        const items = this.state.items;
        items.map(item => {
            if (item.key === key) {
                item.text = text;
            }
        });
        this.setState({
            items: items
        });
    }
    markAsDone(key){
        console.log('Marked');
        const items = this.state.items;
        items.map(item => {
            if (item.key === key) {
                item.marked=false;
            }
        });
        this.setState({
            items: items
        });
    }
    render(){
        return (
            <div><form>
                <CustomInput value={this.state.currentItem.text} onChange={this.handleInput} />
                <CustomButton name="Add" onClick={this.addItem}/>
            </form>
                <div>
                    <p>{this.state.items.text}</p>
                    <TodoList items={this.state.items} markAsDone={this.markAsDone} deleteItem={this.deleteItem} setUpdate={this.setUpdate} />
                </div>
            </div>);
    }
}

export default Form;