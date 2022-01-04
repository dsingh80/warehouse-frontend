import React from 'react';
import { ListCard } from './Card';
import { CardProperty, CardLinkProperty } from './CardProperty';

function CubeCardList(props) {
  let cards = props.cubes.map((cube) => {
    let location = `${cube.aisle} ${cube.row}-${cube.column}`;
    return (
      <ListCard key={cube._id} className='col-12 p-2 m-2 mx-md-0 my-md-2'>
        <div className='row align-items-top'>
          <CardLinkProperty sizeClasses='col-12 col-lg-4' valueClasses='CubeCard__sku' name='SKU' value={cube.sku} url={cube.shopify_product_link} />
          <div className='w-100 d-lg-none' />
          <CardProperty sizeClasses='col-3' name='Location' value={location} />
          <CardProperty sizeClasses='col d-none d-lg-block' name='Size' value={cube.size} />
          <CardProperty sizeClasses='col d-none d-lg-block' name='Color' value={cube.color} />
          <CardProperty sizeClasses='col text-end' name='Available' value={cube.inventory_available} />
        </div>
      </ListCard>
    );
  });

  return (
    <div className='grid grid--cards row justify-content-center p-4'>
      { cards }
    </div>
  );
}


export default CubeCardList;