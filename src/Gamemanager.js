import React, { Component } from 'react';

import Pokemon from './Pokemon';

const Squirtle = {
    name: 'Squirtle',
    level: 5,
    hp: 20
}

class GameManager extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Pokemon name={"Charmander"} level={5} hp={21}></Pokemon>
                <Pokemon {...Squirtle}></Pokemon>
            </div>
        )
    }
}

export default GameManager;
