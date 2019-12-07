import React from 'react';
import PlayerList from './components/PlayersList'

import Data from './components/data'

import {usePinkMode} from './components/useDarkMode'
import {AppBar, Container, Toolbar, Typography} from '@material-ui/core'
import "./App.css"

function App() {

  const [pinkMode, setToggleMode] = usePinkMode(false)

  return (
    <div>
    <AppBar position="static">
      <Toolbar color="coral" className="navbar">
        <Typography variant="h3">Women's World Cup</Typography>
      <div className="pink-mode__toggle">
        <div
          onClick={setToggleMode}
          className={pinkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
      </Toolbar>
    </AppBar>
    <Data />
    <Container>
      <PlayerList />
    </Container>
    </div>
  );
}

export default App;
