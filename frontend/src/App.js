import React, { useEffect } from 'react'

function App() {

  useEffect(()=>{
    fetch('/api')
    .then((res)=>{return res.json()})
    .then((data)=>{console.log(data)})
  }, [])
  return (
    <div>App</div>
  )
}

export default App