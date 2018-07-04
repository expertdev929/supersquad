import React, { Component } from 'react'
import CharacterList from './CharacterList'
import '../styles/index.css'
import HeroList from './HeroList';
import SquadStats from './SquadStats';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>SuperSquad</h2>
                <div className="row">
                    <div className="col-sm">
                        <CharacterList />
                    </div>
                    <div className="col-sm">
                        <HeroList />
                    </div>
                    <div className="col-sm">
                        <SquadStats />
                    </div>
                </div>
            </div>
        )
    }
}

export default App