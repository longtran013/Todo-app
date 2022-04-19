import React, { Component } from 'react';

class Delete extends Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Tired'},
            { id: 'todo2', title: 'Sad'},
            { id: 'todo3', title: 'Sigh'},
        ]
    }
    
    handleDelete = () => {

        this.props.deleteTodo(todo);
        this.setState({
            title: ''
        })
    }


    render () {
        let checkDelete;
        return (
                <button className='delete'
                    onClick={() => this.handleDelete(this.deleteTodo)}
                >Delete</button>
        )
    }
}

export default Delete;