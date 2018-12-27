// taskReducer.js

import { ADD_TASK, DELETE_TASK, FETCH_TASK, FETCH_TASKS } from '../actions/types';

export default function taskReducer(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return { tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return {tasks:[...state.tasks.filter(task => task._id !== action.payload.id)]};
    case FETCH_TASK:
      return { ...state, currentTask: action.payload } ;
    case FETCH_TASKS:
      return { ...state, tasks: action.payload.tasks };
    default:
      return state;
  }
}