import { data } from 'autoprefixer';
import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line, XAxis, YAxis, AreaChart, CartesianGrid, Tooltip, Area } from 'recharts';


const Chart = () => {
    const assignmentMarks = [
        {
            id: 1,
            name: 'assignment-1',
            marks :57
        },
        {
            id: 2,
            name: 'assignment-2',
            marks :58
        },
        {
            id: 3,
            name: 'assignment-3',
            marks :58
        },
        {
            id: 4,
            name: 'assignment-4',
            marks :55
        },
        {
            id: 5,
            name: 'assignment-5',
            marks :58
        },
        {
            id: 6,
            name: 'assignment-6',
            marks :58
        },
        {
            id: 7,
            name: 'assignment-7',
            marks :60
        },
        {
            id: 8,
            name: 'assignment-8',
           marks :50
        }
    ]
    console.log(assignmentMarks)
    return (
        <div>
            <h1 className='text-3xl font-semibold bg-indigo-50 pt-8 pb-12 text-center'>Make Rechart with Assignment marks</h1>
            
           <PieChart className='mx-auto' width={500} height={400}>
          <Pie
            dataKey="marks"
            startAngle={180}
            endAngle={0}
            data={assignmentMarks}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
            />
            <Tooltip></Tooltip>
        </PieChart>
            
        </div>
    );
};

export default Chart;