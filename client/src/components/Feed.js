import React from 'react'
import { Row, Col } from 'reactstrap'

import Player from './Player'

const Feed = (props) => {
    const { players } = props
    console.log(players)
    return (
        <div>
            <Row>
            <Col xs='3'>
                <h5>Player</h5>
            </Col>
            <Col xs='3'>
                <h5>Country</h5>
            </Col>
            <Col xs='5'></Col>
            <Col xs='1'>
                <h5>Searched</h5>
            </Col>
        </Row>
            {
                players.map(player => 
                    <Player player={ player } />
                    )  
            }
        </div>
    )
}

export default Feed

/*

                    */