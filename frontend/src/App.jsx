import { useState } from 'react'
import Form1 from './componants/Form1/Form1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form1 />
    </>
  )
}

export default App
