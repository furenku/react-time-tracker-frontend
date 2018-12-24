import React, { Component } from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

class ProjectsList extends Component {
    
    state = {
        projects: []
    }

    componentDidMount = async () => {

        try {
            
            const response = await axios.get(`http://localhost:4000/projects`);
            const projects = response.data;

            this.setState({projects});


        } catch(error) {
            
            console.log( error )

        }

    }


    displayProjectsList = () => {
        return this.state.projects.map(
            project => (
                <li key={`project-${project.id}`}>
                    <Link to={`project/${project.id}`}>
                        {project.name}
                    </Link>
                </li>
            )
        )
    }


    render() {
        
        return (

            <section className="ProjectsList">
                <header>
                    <h1>
                        Projects
                    </h1>
                    <Link to="/projects/new">
                        <button>
                            New Project
                        </button>
                    </Link>
                </header>


                <ul>
                    {this.displayProjectsList()}
                </ul>
            </section>

        )
    }

}

export default ProjectsList;
