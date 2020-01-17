import React from 'react';
import { Container } from 'reactstrap'
import { useAPI } from './hooks/useAPI'

import Feed from './components/Feed'
import Loading from './components/Loading'

function App() {
  const [players, loading] = useAPI('/api/players')
  console.log(loading)
  return (
    <div className='App'>
      <Container>
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
