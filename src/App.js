import React, { Component } from 'react';
import './styles/App.scss';

import { Route, Link } from 'react-router-dom';

import Home from './components/Home/Home.js';

import ProjectsList from './components/Projects/ProjectsList/ProjectsList.js';

import TasksList from './components/Tasks/TasksList/TasksList.js';
import TaskDetail from './components/Tasks/TaskDetail/TaskDetail.js';
import TaskNew from './components/Tasks/TaskNew/TaskNew.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
         
          <nav>
            <ul>
              <li>
                <Link to="/">
                    Home
                </Link>
              </li>
              <li>                           
                <Link to="/projects">
                    Projects
                </Link>
              </li>
              <li>                           
                <Link to="/tasks">
                    Tasks
                </Link>
              </li>
            </ul>
          </nav>
            
        </header>

        <main>
          
          <Route exact path="/" component={Home}/>
          
          <Route exact path="/projects" component={ProjectsList}/>

          <Route exact path="/tasks" component={TasksList}/>
          <Route exact path="/tasks/new" component={TaskNew}/>
          <Route exact path="/task/:id" component={TaskDetail}/>
          
        </main>

        <footer>
          footer
        </footer>
      </div>
    );
  }
}

export default App;
