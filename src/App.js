import React, { Component } from 'react';

import './styles/main.css';

import PokemonContainer from './components/Pokemon/PokemonContainer';
import LoginContainer from './components/Login/LoginContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <LoginContainer />
                <PokemonContainer />
            </div>
        );
    }
}

export default App;
