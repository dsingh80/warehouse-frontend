import React from 'react';
import { GridCard } from './Card';
import { CardProperty, CardLinkProperty } from './CardProperty';

function CubeCardGrid(props) {
  let cards = props.cubes.map((cube) => {
    let location = `${cube.aisle} ${cube.row}-${cube.column}`;
    return (
      <GridCard key={cube._id} className='col-12 col-md-5 p-2 m-2 mx-md-1 my-md-2'>
        <CardLinkProperty sizeClasses='col-8 col-md-12' valueClasses='CubeCard__sku' name='SKU' value={cube.sku} url={cube.shopify_product_link} />
        <CardProperty sizeClasses='col col-md-12' name='Available' value={cube.inventory_available} />
        <div className="w-100" />
        <CardProperty sizeClasses='col-4' name='Color' value={cube.color} />
        <CardProperty sizeClasses='col-4' name='Size' value={cube.size} />
        <CardProperty sizeClasses='col-4' name='Location' value={location} />
      </GridCard>
    );
  });

  return(
    <div className='grid grid--cards row justify-content-center p-4'>
      { cards }
    </div>
  )
}


export default CubeCardGrid;