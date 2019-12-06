import React, {Component} from 'react'
import axios from 'axios'

import Player from './Player'

export default class PlayerList extends Component{
    constructor(){
        super();
        this.state = {
            playerData: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/players')
        .then (response => {
            console.log(response)
            this.setState({playerData: response.data})
        })
    }

    render(){
        return(
            <div>
                {this.state.playerData.map(eachPlayer => 
                    <Player data={eachPlayer}/>)}
            </div>
        )
    }
}