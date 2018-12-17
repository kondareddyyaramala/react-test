import React from 'react'
import { Link } from 'react-router-dom';


export class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg rounded">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to='/'>Home</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to='/login'>Login</Link>
            </li>
            <br />
            <li className="nav-item">
              <Link to='/register'>Register </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
export default Header;