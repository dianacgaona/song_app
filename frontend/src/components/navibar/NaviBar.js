import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import '../../css/navibar.css';

class NaviBar extends Component {
  render() {
    return (
      <nav className="navi_bar">
        <div className="navi_right">
          <NavLink to="/">Earworm Report</NavLink>
        </div>
        <div className="navi_left">
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/allSongs"> All Songs </NavLink>
          <NavLink to="/songs/bypop"> By Popularity </NavLink>
          <NavLink to="/songs/bygenre"> By Genre </NavLink>
          <NavLink to="/users/1"> My Profile </NavLink>
        </div>
      </nav>
    );
  }
}

export default withRouter(NaviBar);

// <NavLink to={`users/${this.props.user.id}`}> My Profile </NavLink>
