import React from 'react'
import {Card, Typography} from '@material-ui/core'

export default function Player (props){
    return (
        <Card className="playerCard">
            <Typography variant="h5" align="center" color="primary">{props.data.name}</Typography>
            <Typography variant="subtitle1" color="textSecondary">Country</Typography>
            {props.data.country}
            <Typography variant="subtitle1" color="textSecondary">Searches</Typography>
            {props.data.searches}
        </Card>
    )
}