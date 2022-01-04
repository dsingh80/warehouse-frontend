import React from 'react';
import FormResultViewFilter from './FormResultViewFilter';
import FormPaginationFilter from './FormPaginationFilter';
import FormSearchFilter from './FormSearchFilter';

function CubeFilters(props) {
  let className = 'form-filters';
  if(props.className) { className += ' ' + props.className; }

  return (
    <div className={className}>
      <div className='form-group'>
        <FormSearchFilter name='filterSearchTerm' value={props.filterSearchTerm} onChange={props.onChange} />
      </div>
      <div className='form-group row'>
        <FormResultViewFilter className='col justify-content-start pl-3' onChange={props.onChange} />
        <FormPaginationFilter className='col justify-content-end' page={props.page} maxPages={props.maxPages} loadPreviousPage={props.loadPreviousPage} loadNextPage={props.loadNextPage} />
      </div>
    </div>
  )
}


export default CubeFilters;