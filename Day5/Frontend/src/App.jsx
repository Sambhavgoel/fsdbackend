import React from 'react'
import Register from './components/Register'
import View from './components/View'
import Delete from './components/Delete'
import Update from './components/Update'

const App = () => {
  return (
    <div>
      <h1 style={{backgroundColor: 'darkmagenta',color:'white',fontSize:"3rem", textAlign:'center', margin:'0 auto'}}>User Registration System</h1>
      <Register/>
      <View/>
      <Delete/>
      <Update/>
    </div>
  )
}

export default App