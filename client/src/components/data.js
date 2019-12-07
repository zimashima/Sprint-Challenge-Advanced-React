import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ResponsivePie } from '@nivo/pie'

export default function Data(){
    const [thedata, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/api/players')
        .then (respons =>
            setData(respons.data))
    })

    const search0 = thedata.filter(data => data.search ===0).length
    const search1 = thedata.filter(data => data.search ===1).length
    const search2 = thedata.filter(data => data.search ===2).length
    const search3 = thedata.filter(data => data.search ===3).length
    const search4 = thedata.filter(data => data.search ===4).length

    const dataSearch = {
        0: search0,
        1: search1,
        2: search2,
        3: search3,
        4: search4

    }


// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyPie = (datasearch) => (
    <ResponsivePie
        data={datasearch}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 0
                },
                id: 'dots'
            },
            {
                match: {
                    id: 1
                },
                id: 'dots'
            },
            {
                match: {
                    id: 2
                },
                id: 'dots'
            },
            {
                match: {
                    id: 3
                },
                id: 'dots'
            },
            {
                match: {
                    id: 4
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)

return MyPie
}