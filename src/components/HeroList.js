import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeCharacterById } from '../actions'

class HeroList extends Component {
    render() {
        return (
            <div>
                <h4>Your Hero Squad:</h4>
                <ul className="list-group">
                    {
                        this.props.heroes.map(h => {
                            return (
                                <li key={h.id} className="list-group-item">
                                    <div className="list-item">
                                        {h.name}
                                    </div>
                                    <div
                                        onClick={() => this.props.removeCharacterById(h.id)}
                                        className="list-item right-button"
                                    >
                                        x
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        heroes: state.heroes
    }
}

export default connect(mapStateToProps, { removeCharacterById })(HeroList)