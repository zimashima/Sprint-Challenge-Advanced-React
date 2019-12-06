import React from 'react'
import {Card, Typography} from '@material-ui/core'

export default function Player (props){
    return (
        <Card>
            <Typography variant="subtitle1">Name</Typography>
            {props.data.name}
            <Typography variant="subtitle1">Country</Typography>
            {props.data.country}
            <Typography variant="subtitle1">Searches</Typography>
            {props.data.search}
        </Card>
    )
}