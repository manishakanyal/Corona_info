import React,{useEffect,useState} from 'react'
import {Line, Bar} from 'react-chartjs-2'
import { fetchDailyData } from '../../api'
import styles from './Chart.css'
const Chart = () =>{
    const [dailyData, setDailyData] = useState([])

    useEffect(()=>{
        const FetchApi = async() => {
            const dailyData = await fetchDailyData()
            setDailyData(dailyData)
        }
        FetchApi()
    },[])
    const lineChart = (
    dailyData[0]
    ?(<Line
    height={500}
    width={700}
    data={{
        labels: dailyData.map(({date})=> date),
        datasets: [{
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Confirmed',
            bordercolor: '#c79500',
            fill: true,
        },{
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            bordercolor: 'red',
            backgroundColor: 'rgba(255,0,0,0.5)',
            fill: true,
        },{
            data: dailyData.map(({ recovered }) => recovered),
            label: 'Recovered',
            bordercolor: 'green',
            backgroundColor: 'rgba(255,0,0,0.5)',
            fill: true,
        }],
    }}
    />) : null
    )
    return(
        <div className={styles.container}>
            {lineChart}
        </div>
     )
}
export default Chart