import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'JavaScript',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'React.js',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'CSS',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'HTML5',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Node.js',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Express.js',
    A: 65,
    B: 85,
    fullMark: 150,
  },
  {
    subject: 'Angular',
    A: 65,
    B: 85,
    fullMark: 150,
  },
  {
    subject: 'TypeScript',
    A: 65,
    B: 85,
    fullMark: 150,
  },
  {
    subject: 'ASP.Net',
    A: 65,
    B: 85,
    fullMark: 150,
  },
  {
    subject: 'C#',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

function Skills2() {
  return (
    <div >
      <h2 className="titleFont">Skills</h2>
      <ResponsiveContainer width={500} height={500}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
      {/* Additional content or styling for your Skills component can be added here */}
    </div>
  );
}

export default Skills2;
