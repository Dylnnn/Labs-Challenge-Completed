import React from 'react';

const Pagination = ({ resultsPerPage, totalresults, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalresults / resultsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(r => (
          <li key={r} className='page-item'>
            <a onClick={() => paginate(r)} href="!#" className='page-link'>
              {r}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;