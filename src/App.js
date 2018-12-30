import React, { Component } from 'react';
import './styles/App.scss';

import { Switch, Route, Link } from 'react-router-dom';

import Home from './components/Home/Home.js';

import Tasks from './components/Tasks/Tasks/Tasks.js';
import TaskDetail from './components/Tasks/TaskDetail/TaskDetail.js';
import TaskNew from './components/Tasks/TaskNew/TaskNew.js';

import ProjectsList from './components/Projects/ProjectsList/ProjectsList.js';

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
          <Switch>
            <Route exact path="/" component={Home}/>
            
            <Route exact path="/tasks" component={Tasks}/>
            <Route exact path="/task/new" component={TaskNew}/>
            <Route exact path="/task/:id" component={TaskDetail}/>

            <Route exact path="/projects" component={ProjectsList}/>
            
          </Switch>
          
        </main>

        <footer>
          footer
        </footer>
      </div>
    );
  }
}

export default App;
