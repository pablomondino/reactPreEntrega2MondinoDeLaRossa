import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './component/navBar/navBar'
import ItemListContainer from './component/itemListConteiner/itemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (

    


    

    <>  
      <h1>TIENDA LA PIETÁ</h1>
      <NavBar/>
      
      <ItemListContainer greeting="Bienvenido a Tienda La Pietá"/>
    </>

  ) 
}

export default App
