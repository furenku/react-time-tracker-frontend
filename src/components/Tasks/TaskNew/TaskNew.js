import React, { Component } from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag'


const TASK_MUTATION = gql`
mutation CreateTask(
    $id: ID!,
    $title: String!,
    $date_start: String!,
    $date_end: String!,
    $user_id: ID!) {
  createTask(      
    id: $id,
    title: $title,
    date_start: $date_start,
    date_end: $date_end,
    user_id: $user_id,
) {
    title
  }
}
`

class TaskNew extends Component {

    
    state={
        id:0, 
        title: "",
        date_start: new Date().toISOString(),
        date_end: new Date().toISOString(),
        user_id: 123
    }
    
    onNameSetHandler(e){
        let title = e.target.value;
        let id = Math.ceil(Math.random()*10000)
        this.setState({title,id})
    }
    
    constructor(props) {
        
        super(props)

    }

    render() {
        
        const { id, title, date_start, date_end, user_id  } = this.state;

        return (            
            <section className="TaskNew">

                <h1>
                    Task New
                </h1>

                <div>
                    <input type="text" value={this.state.title} onChange={(e)=>this.onNameSetHandler(e)}/>
                    

                    <button onClick={()=>{
                        console.log(this.props);
                        
                        this.props.mutate({
                            variables:{ id, title, date_start, date_end, user_id  }
                        })
                    }}>Submit</button>

                    {/* <Mutation mutation={TASK_MUTATION} variables={{ id, title, date_start, date_end, user_id  }}> */}
                     {/* {taskMutation => <button onClick={taskMutation}>Submit</button>} */}
                    {/* </Mutation> */}

                </div>
            </section>
        )
    }

}


export default graphql(TASK_MUTATION,
{
    options: {
        // fetchPolicy: 'cache-and-network',
        refetchQueries: [
            'TasksList'
        ]
    }
})(TaskNew);

