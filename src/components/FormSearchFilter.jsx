import React from 'react';

function FormSearchFilter(props) {
  let className = 'form-control';
  if(props.className) { className += ' ' + props.className; }
  return(
    <input className={className} type='text' name={props.name} value={props.value} onChange={props.onChange} />
  );
}


export default FormSearchFilter;