import React from 'react';

function FormPaginationFilter(props) {
  let className = 'form-group pagination';
  if(props.className) { className += ' ' + props.className; }

  let prevPageClasses = 'page-item',
    nextPageClasses = 'page-item';
  if(props.page && props.page <= 1) { prevPageClasses += ' disabled'; }
  if(props.page && props.page == props.maxPages) { nextPageClasses += ' disabled'; }

  return (
    <ul className={className}>
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
  )
}


export default FormPaginationFilter;