import React from 'react';
import { Container } from 'reactstrap'
import { useAPI } from './hooks/useAPI'
import { Row, Col } from 'reactstrap'

import Feed from './components/Feed'
import Loading from './components/Loading'

function App() {
  const [players, loading] = useAPI('/api/players')
  console.log(loading)
  return (
    <div className='App'>
      <Container>
        <div className="spacer"></div>
        <Row>
          <Col xs='12' style={{textAlign: 'center'}}>
            <h1>Women's World Cup</h1>
          </Col>
        </Row>
        <div className="spacer"></div>
        {
          loading === true ?
          <Loading /> :
          <Feed players={ players } />
           
        }
      </Container>
    </div>
  );
}

export default App;
