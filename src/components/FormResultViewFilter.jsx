import React from 'react';

function FormResultViewFilter(props) {
  let className = 'form-group form-check-inline';
  if(props.className) { className += ' ' + props.className; }

  return (
    <div className={className}>
      <label htmlFor='filterViewType' className='form-check-label--icon'>
        <input type='radio' name='filterViewType' className='' value='list' onChange={props.onChange} />
        <i className='bi bi-view-stacked p-2' />
      </label>
      <label htmlFor='filterViewType' className='form-check-label--icon'>
        <input type='radio' name='filterViewType' className='' value='grid' onChange={props.onChange} />
        <i className='bi bi-grid p-2'/>
      </label>
    </div>
  );
}


export default FormResultViewFilter;