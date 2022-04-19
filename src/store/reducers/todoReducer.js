// import { CREATE_TODO, DELETE_TODO, EDIT_TODO } from '../actions/actionType'

const initState = {
    todos: [
        { id: 'todo1', title: 'Work'},
        { id: 'todo2', title: 'Play'},
        { id: 'todo3', title: 'Study'},
    ],
}

const todoReducer = (state = initState, action) => {
    switch(action.type) {

        case 'CREATE_TODO':
            console.log('>>> run into create todo: ', action);

            let todo = state.todos
            let id = Math.floor(Math.random() * 10000);
            todo = { id: id, title: action.payload}
            
            return {
                ...state, todos: [...state.todos, todo]
            }

        case 'DELETE_TODO':
            console.log('>>> run into delete todo: ', action);

            let todos = state.todos;
            todos = todos.filter(item => item.id !== action.payload.id)

            return {
                ...state, todos
            };

        case 'EDIT_TODO':
            console.log('>>> run into edit todo: ', action)

            

            return {
                ...state, todos
            }
        default:
            return state;
    }
}

export default todoReducer;