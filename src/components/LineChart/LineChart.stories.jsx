import React from 'react';
import LineChart from './LineChart';

function generateInt(min = 0, max = 1000) {
  return Math.floor(Math.random() * max) + min;
}

function generatePoints(n) {
  const points = [];

  while (points.length < n) {
    points.push([points.length, generateInt()]);
  }

  return points;
}

export default {
  title: 'LineChart',
  component: LineChart,
};

export const withPoints = (args) => (
  <LineChart {...args}>
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'rgba(255, 0, 0, 0.5)', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'rgba(255, 0, 0, 0)', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'rgba(0, 0, 255, 0.5)', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'rgba(0, 0, 255, 0)', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
  </LineChart>
);

withPoints.args = {
  datasets: [
    {
      color: 'red',
      fill: 'url(#grad1)',
      name: 'Line 1',
      points: generatePoints(20),
    },
    {
      color: 'blue',
      fill: 'url(#grad2)',
      name: 'Line 2',
      points: generatePoints(10),
    },
  ],
  height: 300,
};
