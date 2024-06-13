import React from 'react';
import CircularProgress from './CircularProgress';

const SummaryCard = ({ title, value, percentage }) => (
  <div className="p-4 rounded-lg shadow">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="mt-2 text-3xl font-bold">{value}</p>
    <CircularProgress percentage={percentage} />
  </div>
);

export default SummaryCard;
