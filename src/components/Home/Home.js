import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {
        return (            
            <section className="Home">
                <h1>
                    Home
                </h1>

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
                
            </section>
        )
    }

}

export default Home;

