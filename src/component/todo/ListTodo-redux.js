import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ListTodo.css';

class ListTodo extends Component {
    state = {
        title: ''
    }

    handleOnChangeCreate = (event) => {
        this.setState ({
            title: event.target.value
        })
    }

    handleCreateTodo = (title) => {
        console.log('>>> check create: ', title)

        if(!this.state.title) {
            alert('Cannot create empty todo')
            return;
        }
        
        this.props.createTodoRedux(title);

        this.setState({
            title: ''
        })
    }

    handleDeleteTodo = (todos) => {
        console.log('>>> check todo delete: ', todos)
        this.props.deleteTodoRedux(todos);
    }

    handleEditTodo = (todos) => {
        console.log('>>> check todo edit: ', todos)
        this.props.editTodoRedux(todos)
    }

    render() {
        let listTodos = this.props.dataRedux;
        return (
            <>
                <p>
                    Todo List
                </p>
                <div className='list-todo-container'>
                    <input type="text" value={this.state.title}
                        onChange={(event) => this.handleOnChangeCreate(event)}
                    />
                    <button className='create'
                        onClick={() => this.handleCreateTodo(this.state.title)}
                    >Create</button>
                    <div className='list-todo-content'>
                        {listTodos && listTodos.length > 0 && 
                            listTodos.map((item, index) => {
                                return (
                                    <div className='todochild' key={item.id}>
                                        <span>{index + 1}. {item.title}</span>
                                        <button className='edit'
                                            onClick={() => this.handleEditTodo(item)}
                                        >Edit</button>

                                        <button className='delete'
                                            onClick={() => this.handleDeleteTodo(item)}
                                        >Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        dataRedux: state.todoReducer.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTodoRedux: (todoCreate) => dispatch ({ type: 'CREATE_TODO', payload: todoCreate }),
        deleteTodoRedux: (todoDelete) => dispatch ({ type: 'DELETE_TODO', payload: todoDelete }),
        editTodoRedux: (todoEdit) => dispatch ({ type: 'EDIT_TODO', payload: todoEdit })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);