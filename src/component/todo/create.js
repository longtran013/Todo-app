import React, { Component } from 'react';

class Create extends Component {
    state = {
        title: ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleCreate = () => {
        if(!this.state.title) {
            alert('Cannot create empty todo')
            return;
        }

        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }

        this.props.createTodo(todo);
        
        // xóa input sau khi create
        this.setState({
            title: ''
        })
        
    }
    render () {
        let { title } = this.state;

        return (
            <div className='add-todo'>
                <input type='text' value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button type='button' className='create'
                    onClick={() => this.handleCreate()}    
                >Create</button>
            </div>
        )
    }
}

export default Create;