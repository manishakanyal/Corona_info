import React, { useEffect, useState } from 'react'
import Cards from './components/Cards/Cards'
import CountryPicker from './components/CountryPicker/CountryPicker'
import Chart from './components/Chart/Chart'
import styles from './App.module.css'
import {fetchData} from './api'

function App() {
  const [data,setData] = useState({})
useEffect(() => {
    async function fetchMyAPI() {
      const fetchedData = await fetchData()
      setData(fetchedData)

    }
    fetchMyAPI()

 }, [])
  return (
    <div className = {styles.container}>
      <Cards data={data}/>
      <CountryPicker/>
      <Chart/>

    </div>
    
    
  );
}

export default App;
