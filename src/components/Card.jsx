import React from 'react';

function Card(props) {
  return(
    <div className={'card ' + props.className}>
      {props.children}
    </div>
  )
}

function ListCard(props) {
  return (
    <Card className={'list__card ' + props.className}>
      {props.children}
    </Card>
  );
}

function GridCard(props) {
  return (
    <Card className={'grid__card ' + props.className}>
      <div className='row align-items-center'>
        {props.children}
      </div>
    </Card>
  );
}

export { ListCard, GridCard }
export default Card;