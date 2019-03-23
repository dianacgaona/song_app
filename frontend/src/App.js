import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NaviBarContainer from './components/navibar/NaviBarContainer';
import Home from './components/home/Home';
import AllSongsContainer from './components/allsongs/AllSongsContainer';
import ByPopContainer from './components/bypop/ByPopContainer';
import ByGenreContainer from './components/bygenre/ByGenreContainer';
import ProfileContainer from './components/profile/ProfileContainer';
// import CurrentProfileContainer from "./components/currentprofile/CurrentProfileContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path={'/'} component={NaviBarContainer} />
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/allSongs'} component={AllSongsContainer} />
        <Route path={'/songs/bypop'} component={ByPopContainer} />
        <Route path={'/songs/bygenre'} component={ByGenreContainer} />
        <Route path={'/users/:id'} component={ProfileContainer} />
      </div>
    );
  }
}

export default App;

// <Route path={"/currentUser/:id"} component={CurrentProfileContainer} />
