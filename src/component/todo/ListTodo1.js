import React, { Component } from 'react';

import './ListTodo.css';
import Create from './create.js';

class ListTodo1 extends Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Work'},
            { id: 'todo2', title: 'Play'},
            { id: 'todo3', title: 'Study'},
        ],
        editTodo: {}
    }

    createTodo = (todo) => {
        // let currentListTodo = this.state.listTodos
        // currentListTodo.push(todo)

        this.setState ({
            listTodos: [...this.state.listTodos, todo]
            // listTodos = currentListTodo
        })
    }

    // trả về mảng sau khi xóa (check item.id với todo.id -> trả về mảng)
    // xóa todo1, trả về mảng todo2 và todo3 (vì todo 1 != todo2, todo3)

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState ({
            listTodos: currentTodos
        })
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;

        // nếu length === 0 -> true
        let isEmptyObj = Object.keys(editTodo).length === 0;

        // nút Save - trong trường hợp editTodo ko rỗng (đang Edit)
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos]
            // tìm index (id)
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));

            listTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })

            return;
        }
        // nút Edit
        this.setState({
            editTodo: todo
        })
    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        // let listTodos = this.state.listTodos
        let { listTodos, editTodo } = this.state;

        let isEmptyObj = Object.keys(editTodo).length === 0;

        return (
            <div className='list-todo-container'>
                <Create createTodo={this.createTodo}/>
                <div className='list-todo-content'>
                    { listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className='todochild' key={item.id}>

                                    {/* nếu editTodo rỗng (true - chưa edit) */}
                                    {isEmptyObj === true ?
                                        <span> {index + 1}. {item.title} </span> /* in bình thường */
                                        :
                                        <> {/* nếu editTodo ko rỗng (false - ấn edit) */}
                                            {editTodo.id === item.id ? // check nếu id của edit === item thì chỉ hiện input edit ở item đó 
                                                                       // ấn edit todo1 thì chỉ item1 sửa 
                                                <span>
                                                    {index + 1}. <input
                                                    value={editTodo.title}
                                                    onChange={(event) => this.handleOnChangeEditTodo(event)}                                   
                                                    />
                                                </span>
                                                :
                                                // nếu !== thì in bình thường
                                                // item2 với item3 hiện như bình thường
                                                <span>
                                                    {index + 1}. {item.title}
                                                </span>
                                            }
                                        </>
                                    }
                                    <button className='edit'
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                        {isEmptyObj === false && editTodo.id === item.id ?
                                            'Save': 'Edit'
                                        }
                                        </button>
                                    <button className='delete'
                                        onClick={() => this.handleDeleteTodo(item)}
                                    >Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListTodo1;