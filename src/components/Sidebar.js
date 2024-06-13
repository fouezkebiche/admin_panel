import React from 'react';

const Sidebar = ({ setView }) => {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold">Admin</div>
      <nav className="mt-5 flex-1">
        <ul>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={() => setView('list')}>
            List View
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={() => setView('map')}>
            Map View
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
