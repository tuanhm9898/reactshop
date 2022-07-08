import React from 'react';
import {AreaChart,Area, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts";

const ChartDay = () => {
    const data = [
        {
            "name": "Thứ 2",
            "purchases": 4,
            "amt": 2400
        },
        {
            "name": "Thứ 3",
            "purchases": 30,
            "amt": 2210
        },
        {
            "name": "Thứ 4",
            "purchases": 20,
            "amt": 2290
        },
        {
            "name": "Thứ 5",
            "purchases": 27,
            "amt": 2000
        },
        {
            "name": "Thứ 6",
            "purchases": 27,
            "amt": 2181
        },
        {
            "name": "Thứ 7",
            "purchases": 40,
            "amt": 2500
        },
        {
            "name": "Chủ Nhật",
            "purchases": 50,
            "amt": 2100
        }
    ]
    return (
        <div>
            <AreaChart width={800} height={250} data={data}
                       margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="purchases" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </div>
    );
};

export default ChartDay;