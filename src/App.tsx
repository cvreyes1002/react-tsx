// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Button from './components/Button'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>My React App</h1>
      <div className="card">
        {"Profile "}
        <Button title="Sign Out" disabled onClick={() => alert("Sign Out")}/>
      </div>
      <div className="card">
        {"Home "}
        <Button title="Register" objArr={[{id: "", title: ""}]} onClick={() => alert("Sign Out")}/>
      </div>
    </>
  )
}

export default App
