import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-between items-center mt-4">
    <button
      className="px-4 py-2 bg-gray-200 rounded-lg"
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Précédente
    </button>
    <span>
      Page {currentPage} de {totalPages}
    </span>
    <button
      className="px-4 py-2 bg-gray-200 rounded-lg"
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Suivante
    </button>
  </div>
);

export default Pagination;
