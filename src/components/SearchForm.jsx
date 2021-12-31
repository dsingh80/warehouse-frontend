import React, { Component } from 'react';
import CubeCardGrid from './CubeCardGrid';

class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filters: {},
      results: [
        {
          "_id": "aklsjdal",
          "sku": "1099-2",
          "size": "S",
          "aisle": 18,
          "row": "C",
          "column": 1,
          "color": "",
          "alternate_sku": "",
          "inventory_available": 13,
          "shopify_product_link": "#"
        },
        {
          "_id": "asdagsdxc",
          "sku": "1099-3",
          "size": "S",
          "aisle": 18,
          "row": "D",
          "column": 2,
          "color": "White",
          "alternate_sku": "",
          "inventory_available": 5,
          "shopify_product_link": "#"
        }
      ]
    };
  }

  render() {
    return (
      <div className='container'>
        <CubeCardGrid cubes={this.state.results} />
      </div>
    );
  }
}


export default SearchForm;