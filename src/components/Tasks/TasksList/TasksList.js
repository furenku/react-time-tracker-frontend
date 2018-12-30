import React, { Component } from 'react';

import { graphql } from 'react-apollo';

import gql from 'graphql-tag'


const TasksList = ({data,loading,error}) => {
    
    let tasks = data.allTasks;


    if (loading) {

        return <p>Loading...</p>;

    } else if (error) {

        return <p>Error!</p>;

    } else {

        return (            
            <section className="TasksList">
            
                <h1>
                    TasksList
                </h1>
                
                <div>
                    {!!tasks && tasks.map(task => <div key={Math.random()}>{task.title}</div>)}
                </div>
                
            </section>
        )


    }
}



export default graphql(gql`
  query TasksList{
    allTasks {
        id
        title
    } 
  }
`,
{
    options: {
        fetchPolicy: 'cache-and-network'
    }
})(TasksList);


/*

import React, { Component } from 'react';

import { Query } from 'react-apollo'
import gql from 'graphql-tag'


const TASKS_LIST_QUERY = gql`
{
    allTasks {
        id
        title
    } 
}

`

class TasksList extends Component {


    render() {
        return (            
            <section className="TasksList">
                <h1>
                    TasksList
                </h1>
                <Query query={TASKS_LIST_QUERY}>
                    {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>
                    console.log(data.allTasks);
                    
                    const tasksToRender = data.allTasks
                
                    return (
                        <div>
                            {tasksToRender.map(task => <div key={'task'+Math.random()}>{task.title}</div>)}
                        </div>
                    )
                    }}
                </Query>

            </section>
        )
    }

}

export default TasksList;

*/