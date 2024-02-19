import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from 'react'
import Menu from './components/Menu'
import NoticiasGrid from './components/NoticiasGrid'


function App() {
  const[items,setItems] = useState([])
  const[active, setActive] = useState (1)
  const[category, setCategory] = useState("general")

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=7ac55007be974592b5f347be5012f367&q=us')
    .then(res => res.json())
    .then(data => setItems(data.articles))
  }, [category])

  return (
    <>
    <div className='text-center my-4'>
      <h1 className='container fluid bg-secondary py-2'>Noticias</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NoticiasGrid items={items} />
    </div>
  
      
    </>
  )
}

export default App
