import React, { Component } from 'react';
import './styles/App.scss';

import { Route, Link } from 'react-router-dom';

import Home from './components/Home/Home.js';
import TasksList from './components/Tasks/TasksList/TasksList.js';

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
                <Link to="/tasks">
                    Tasks
                </Link>
              </li>
            </ul>
          </nav>
            
        </header>

        <main>
          
          <Route exact path="/" component={Home}/>
          <Route exact path="/tasks" component={TasksList}/>
          
        </main>

        <footer>
          footer
        </footer>
      </div>
    );
  }
}

export default App;
