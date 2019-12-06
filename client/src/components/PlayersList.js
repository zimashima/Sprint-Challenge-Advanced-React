import React, {Component} from 'react'
import axios from 'axios'

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
        })
    }

    render(){
        return(
            <div>
            </div>
        )
    }
}