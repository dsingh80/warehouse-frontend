import React from 'react';

function CardProperty(props) {
  return (
    <div className={props.sizeClasses || 'col'}>
      <small className='text-muted'>{props.name}</small>
      <h3 className={props.valueClass}>{props.value || '-'}</h3>
    </div>
  );
}

function CardLinkProperty(props) {
  let {value, url, ...otherProps} = props;
  value = (<a href={url} target='_'>{value}<i className='new-tab-link bi bi-box-arrow-up-right'></i></a>);
  return (
    <CardProperty
      {...otherProps}
      value={value}
    />
  );
}

export { CardProperty, CardLinkProperty };
export default CardProperty;