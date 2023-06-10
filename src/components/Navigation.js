import React, { PureComponent } from 'react';
import './Navigation.css';
import { NavLink } from 'react-bootstrap';

export class Navigation extends PureComponent {
  render() {
    return (
        <div className="nav12">
        <h1 class='text-blue-500'>
            <NavLink to='/Project'>Projects</NavLink>  
          </h1>
          <span class='text-white'>/</span>
          <h1 class='text-blue-500'>
            <NavLink to='/About'>About</NavLink>  
          </h1>
          <span class='text-white'>/</span>
          <h1 class='text-blue-500'>
            <NavLink to='/Viewblog'>Blogs</NavLink>  
          </h1>
          <span class='text-white'>/</span>
          <h1 class='text-blue-500'>
            <NavLink to='/Photo'>Frames</NavLink>  
          </h1>
          </div>
    )
  }
}

export default Navigation
