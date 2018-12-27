// index.js

import { ADD_TASK, DELETE_TASK, FETCH_TASK, FETCH_TASKS } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:4000/tasks';

export const createTask = ({ name, description }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}`, {name, description})
      .then(response => {
        dispatch(createTaskSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createTaskSuccess =  (data) => {
  return {
    type: ADD_TASK,
    payload: {
      name: data.name,
      description: data.description
    }
  }
};

export const deleteTaskSuccess = id => {
  return {
    type: DELETE_TASK,
    payload: {
      id
    }
  }
}

export const deleteTask = id => {
  return (dispatch) => {
    return axios.delete(`${apiUrl}/${id}`)
      .then(response => {
        dispatch(deleteTaskSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};



export const fetchTask = (task) => {
  return {
    type: FETCH_TASK,
    payload: {...task}
  }
};


export const fetchTasks = (tasks) => {
  return {
    type: FETCH_TASKS,
    payload: {
      tasks: tasks
    }
  }
};


export const fetchSingleTask = (id) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/${id}`)
      .then(response => {
        dispatch(fetchTask(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchAllTasks = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchTasks(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};