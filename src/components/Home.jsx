import React from 'react'
import { Link } from 'react-router-dom';
export class Home extends React.Component {
    render() {
        return (
            <div>
                <h3>Home Page</h3>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </div>
        )
    }
}

export default Home;