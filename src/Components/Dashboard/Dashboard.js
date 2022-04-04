import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'


const Dashboard = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <h2>Dashboard</h2>
            <div className='line'>
                <LineChart width={400} height={400} data={data}>
                    <Line dataKey='sell'></Line>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>


                <AreaChart width={400} height={400} data={data}>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Area dataKey="revenue" ></Area>
                    <Area dataKey="investment" ></Area>
                </AreaChart>

            </div>
        </div>
    );
};

export default Dashboard; 