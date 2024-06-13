import React from 'react';
import '../../index.css';
import Header from './Header';
import SummaryCard from './SummaryCard';
import BusTable from './BusTable';

const Dashboard = () => {
  return (
    <div className="flex-1 p-6 bg-gray-100">
      <Header />
      <div className="grid grid-cols-4 gap-4 mt-6">
        <SummaryCard title="Lignes" value="8" percentage={75} />
        <SummaryCard title="Bus" value="52" percentage={60} />
        <SummaryCard title="Circuits" value="20" percentage={90} />
        <SummaryCard title="Tickets" value="12 000 DA" percentage={45} />
      </div>
      <BusTable />
    </div>
  );
};

export default Dashboard;
