import React from 'react'
import FlushSync from './flushSync'
import SetState from './setState'
import Event from './event'
class App extends React.Component {
  render () {
    return (
      <div className="App">
        <SetState />
        {/* <FlushSync /> */}
        {/* <Event /> */}
      </div>
    )
  }
}

export default App
