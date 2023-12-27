
import { useEffect } from 'react'
import './App.css'
import { fetchDataFromAPI } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfigurations } from './store/homeSlice'

function App() {
  const {url} = useSelector((state)=>state.home);
  const dispatch = useDispatch()

  useEffect(()=>{apiTesting()},[])

  const apiTesting = () =>{
    fetchDataFromAPI("/movie/popular").then((res)=>{ dispatch(getApiConfigurations(res))})
  }
  
  return (
    <>
      <h2>App</h2>
    </>
  )
}

export default App
