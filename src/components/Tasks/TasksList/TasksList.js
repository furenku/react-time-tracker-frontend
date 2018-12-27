import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {connect} from 'react-redux';


const mapStateToProps = state => {
    console.log(state.tasks)
    return { tasks: state.tasks.tasks };
};

class TasksList extends Component {
    
    state = {
        tasks: []
    };

    renderTasksList = () => {
        if( !! this.props.tasks ) {

            return this.props.tasks.map( (task,i) => {
                return (
                    <li key={i}>
                        <Link to={`/task/${task.id}`}>
                            {task.name}
                        </Link>
                    </li>
                )
            })
        }
    }
    render() {
        return (            
            <section className="TasksList">
                <h1>
                    TasksList
                </h1>
                <Link to="/task/new">
                        <button>
                            New Task
                        </button>
                </Link>

                { this.renderTasksList()}
            </section>
        )
    }

}

export default connect(mapStateToProps)(TasksList);

