    // actions/TodoActions.js
    import * as types from '../constants/ActionTypes';

    export function addTodo(text) {
        return {
            type: types.ADD_TODO,
            id,
            text
        };
    }

    export function deleteTodo(id) {
        return {
            type: types.DELETE_TODO,
            id
        };
    }

    export function editTodo(id, text) {
        return {
            type: types.EDIT_TODO,
            id,
            text
        };
    }




