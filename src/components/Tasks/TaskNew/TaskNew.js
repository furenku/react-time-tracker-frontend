import React, { Component } from 'react';
import { connect } from "react-redux";

import { createTask } from "../../../redux/actions/index";

function mapDispatchToProps(dispatch) {
    return {
      addTask: task => dispatch(createTask(task))
    };
}

const mapStateToProps = state => {
    return { name: state.name, description: state.description };
};

class TaskNew extends Component {

    state = {
        name: '',
        description: ''
    };
    
    handleNameChange = (event) => {
        
        this.setState({name: event.target.value})

    }

    handleDescriptionChange = (event) => {
        this.setState({description: event.target.value})        
    }

    addTask() {
        this.props.addTask({ name: this.state.name, description: this.state.description });
        // store.dispatch({type:"ADD_TASK",payload:{"newTask":this.state.name}})
    }

    render() {
        
        return (

            <section className="TaskNew">
                <h1>
                    New Task
                </h1>
                <input name="name" type="text" value={this.state.name} onChange={(e)=>this.handleNameChange(e)}/>
                <textarea name="description" value={this.state.description} onChange={(e)=>this.handleDescriptionChange(e)}/>

                <button onClick={()=>this.addTask()}>
                    Add Task
                </button>

            </section>

        )
    }

}


export default connect(mapStateToProps,mapDispatchToProps)(TaskNew);
