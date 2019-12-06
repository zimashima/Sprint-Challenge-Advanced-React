import React from 'react'
import {Card, Typography} from '@material-ui/core'

export default function Player (data){
    return (
        <Card>
            <Typography variant="subtitle1">Name</Typography>
            {data.name}
            <Typography variant="subtitle1">Country</Typography>
            {data.country}
            <Typography variant="subtitle1">Searches</Typography>
            {data.search}
        </Card>
    )
}