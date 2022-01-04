import React from 'react';
import FormResultViewFilter from './FormResultViewFilter';
import FormPaginationFilter from './FormPaginationFilter';

function CubeFilters(props) {
  let className = 'form-filters';
  if(props.className) { className += ' ' + props.className; }

  return (
    <div className={className}>
      <FormPaginationFilter page={props.page} maxPages={props.maxPages} loadPreviousPage={props.loadPreviousPage} loadNextPage={props.loadNextPage} />
      <FormResultViewFilter onChange={props.onChange} />
    </div>
  )
}


export default CubeFilters;