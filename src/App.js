import React, { Component } from 'react';

import './styles/main.css';

import Container from './components/Pokemon/Container';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Container />
            </div>
        );
    }
}

export default App;
