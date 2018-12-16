import React from 'react'
import { Link } from 'react-router-dom';


export class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}
export default Header;