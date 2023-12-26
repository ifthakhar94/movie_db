
import './App.css'
import { fetchDataFromAPI } from './utils/api'

function App() {

  const apiTesting = () =>{
    fetchDataFromAPI("/movie/popular".then((res)=>{console.log(res)}))
  }
  return (
    <>
      <h2>App</h2>
    </>
  )
}

export default App
