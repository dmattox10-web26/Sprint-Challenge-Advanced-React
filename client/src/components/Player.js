import React from 'react'
import { Row, Col, Card, CardTitle, CardSubtitle, CardText } from 'reactstrap'

export const Player = (props) => {
    const { player } = props
    return (
        <Row>
            <Col xs='3'>
                <h5>{ player.name }</h5>
            </Col>
            <Col xs='3'>
                <h5>{ player.country }</h5>
            </Col>
            <Col xs='5'></Col>
            <Col xs='1'>
                <h5>{ player.searches }</h5>
            </Col>
        </Row>
    )
}

export default Player