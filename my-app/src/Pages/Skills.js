import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'JavaScript',
    uv: 120,
    pv: 110,
    amt: 150,
  },
  {
    name: 'React.js',
    uv: 98,
    pv: 130,
    amt: 150,
  },
  {
    name: 'CSS',
    uv: 86,
    pv: 130,
    amt: 150,
  },
  {
    name: 'HTML5',
    uv: 99,
    pv: 100,
    amt: 150,
  },
  {
    name: 'Node.js',
    uv: 85,
    pv: 90,
    amt: 150,
  },
  {
    name: 'Express.js',
    uv: 65,
    pv: 85,
    amt: 150,
  },
  {
    name: 'Angular',
    uv: 65,
    pv: 85,
    amt: 150,
  },
  {
    name: 'TypeScript',
    uv: 65,
    pv: 85,
    amt: 150,
  },
  {
    name: 'ASP.Net',
    uv: 65,
    pv: 85,
    amt: 150,
  },
  {
    name: 'C#',
    uv: 65,
    pv: 85,
    amt: 150,
  },
];

function Skills() {
  return (
    <div className='col'>
        <div className='center'>
          <h2 className="titleFont">Skills</h2>
        </div>
      <ResponsiveContainer width={1000} height={500}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Skills;