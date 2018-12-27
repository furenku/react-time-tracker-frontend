import React, { Component } from 'react';
import { connect } from "react-redux";

import { fetchSingleTask } from "../../../redux/actions/index";

const mapStateToProps = (state,ownProps) => {
    if( !! state.currentTask ) {
        return { id: ownProps.match.params.id, name: state.currentTask.name, description: state.currentTask.description };
    } else return { id: ownProps.match.params.id }
};
function mapDispatchToProps(dispatch) {
    return {
      fetchTask: id => dispatch(fetchSingleTask(id))
    };
}


class TaskDetail extends Component {

    componentWillMount() {

        this.props.fetchTask(this.props.id);    
    }

    render() {
        
        return (

            <section className="TaskDetail">
                <h1>             
                   {this.props.name}
                </h1>
                <section className="description">
                    {this.props.description}
                </section>

                <button>
                    Edit
                </button>

            </section>

        )
    }

}


// export default connect(mapStateToProps,mapDispatchToProps)(TaskDetail);
export default connect(mapStateToProps,mapDispatchToProps)(TaskDetail);
