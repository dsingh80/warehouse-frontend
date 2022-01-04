import React, {Fragment} from 'react';

function FormResultViewFilter(props) {
  return (
    <Fragment>
      <label htmlFor='filterViewType'><i className='bi bi-view-stacked' /></label>
      <input type='radio' name='filterViewType' value='list' onChange={props.onChange} />
      <label htmlFor='filterViewType'><i className='bi bi-grid'/></label>
      <input type='radio' name='filterViewType' value='grid' onChange={props.onChange} />
    </Fragment>
  );
}


export default FormResultViewFilter;