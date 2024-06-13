import React, { useState } from 'react';
import Pagination from './Pagination';

const BusTable = () => {
  const itemsPerPage = 4; // Number of buses per page
  const [currentPage, setCurrentPage] = useState(1);

  const busData = [
    // Replace with your actual bus data
    {
      chauffeur: 'John Doe',
      email: 'john.doe@gmail.com',
      bus: '8',
      ligne: 'NV - ZW',
      position: 'Voir',
      etat: 'Au Service',
    },
    {
      chauffeur: 'John Doe',
      email: 'john.doe@gmail.com',
      bus: 'B2',
      ligne: 'KH - AR',
      position: 'Voir',
      etat: 'Au Service',
    },
    {
      chauffeur: 'John Doe',
      email: 'john.doe@gmail.com',
      bus: '18',
      ligne: 'CV - FL',
      position: 'Voir',
      etat: 'En Panne',
    },
    {
      chauffeur: 'John Doe',
      email: 'john.doe@gmail.com',
      bus: 'P1',
      ligne: 'KH - NV',
      position: 'Voir',
      etat: 'Hors Service',
    },
    {
      chauffeur: 'John Doe',
      email: 'john.doe@gmail.com',
      bus: '3C',
      ligne: 'JW - NV',
      position: 'Voir',
      etat: 'Au Service',
    },
    // Add more bus data here
  ];

  const totalPages = Math.ceil(busData.length / itemsPerPage);
  const pageRange = Array.from({ length: totalPages }, (_, i) => i + 1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedBuses = busData.slice(startIndex, endIndex);

  return (
    <div className="mt-6 bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <button className="px-4 py-2 bg-gray-200 rounded-lg">Filtre</button>
          <button className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg">
            Ajouter un bus
          </button>
          <span className="ml-4">1 ligne sélectionnée</span>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Chercher"
            className="ml-4 px-4 py-2 border rounded-lg"
          />
        </div>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Selected</th>
            <th>Chauffeur</th>
            <th>N° Bus</th>
            <th>Ligne</th>
            <th>Position</th>
            <th>État</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayedBuses.map((bus, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" className="mr-2" />
              </td>
              <td>
                <span className="font-semibold">{bus.chauffeur}</span>
                <div className="text-gray-500">{bus.email}</div>
              </td>
              <td>{bus.bus}</td>
              <td>{bus.ligne}</td>
              <td>
                <a href="#" className="text-blue-500">
                  {bus.position}
                </a>
              </td>
              <td>{bus.etat}</td>
              <td className="flex space-x-2">
                <button className="text-yellow-500">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.232 5.232l3.536 3.536M9 11l3 3L22 4m-7 7H5v14h14V7z"
                    />
                  </svg>
                </button>
                <button className="text-red-500">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default BusTable;
