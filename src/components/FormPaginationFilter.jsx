import React from 'react';

function FormPaginationFilter(props) {
  let prevPageClasses = 'page-item',
    nextPageClasses = 'page-item';
  if(props.page && props.page <= 1) { prevPageClasses += ' disabled'; }
  if(props.page && props.page == props.maxPages) { nextPageClasses += ' disabled'; }

  return (
    <nav aria-label='...'>
      <ul className='pagination'>
        <li className={prevPageClasses}>
          <a className='page-link' href='#' onClick={props.loadPreviousPage}>Previous</a>
        </li>
        <li className='page-item active' aria-current='page'>
          <a className='page-link' href='#'>{props.page}</a>
        </li>
        <li className={nextPageClasses}>
          <a className='page-link' href='#' onClick={props.loadNextPage}>Next</a>
        </li>
      </ul>
    </nav>
  )
}


export default FormPaginationFilter;