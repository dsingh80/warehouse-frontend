import React, { Component } from 'react';
import ThobiasAPI from '../api/ThobiasAPI';
import CubeCardGrid from './CubeCardGrid';
import CubeCardList from './CubeCardList';
import CubeFilters from './CubeFilters';


class CubeSearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterSearchTerm: '1074',
      page: 1,
      maxPages: 10,
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

    this.resultsPerPage = 20;
    this.onInputChanged = this.onInputChanged.bind(this);
    this.loadPreviousPage = this.loadPreviousPage.bind(this);
    this.loadNextPage = this.loadNextPage.bind(this);
  }


  /**
   * @method onInputChanged
   * @description Controlled component callback
   */
  onInputChanged(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }


  loadPreviousPage(ev) {
    if(this.state.page <= 1) { return; }
    let endpoint = '/product/' + this.state.filterSearchTerm;
    endpoint += '?sort=' + encodeURIComponent('aisle row column');
    endpoint += '&page=' + (this.state.page - 1);
    endpoint += '&limit=' + this.resultsPerPage;
    // eslint-disable-next-line no-undef
    ThobiasAPI.sendRequest('GET', endpoint, null, (err, data) => {
      if(err) { console.error(err); return; }
      this.setState({
        page: data.page,
        maxPages: data.totalPages,
        results: data.docs
      })
    });
  }


  loadNextPage(ev) {
    if(this.state.page >= this.state.maxPages) { return; }
    let endpoint = '/product/' + this.state.filterSearchTerm;
    endpoint += '?sort=' + encodeURIComponent('aisle row column');
    endpoint += '&page=' + (this.state.page + 1);
    endpoint += '&limit=' + this.resultsPerPage;
    // eslint-disable-next-line no-undef
    ThobiasAPI.sendRequest('GET', endpoint, null, (err, data) => {
      if(err) { console.error(err); return; }
      this.setState({
        page: data.page,
        maxPages: data.totalPages,
        results: data.docs
      })
    });
  }


  render() {
    let cards;
    if(this.state.filterViewType == 'grid') {
      cards = (<CubeCardGrid cubes={this.state.results} />);
    }
    else {
      cards = (<CubeCardList cubes={this.state.results} />);
    }


    return (
      <div className='container'>
        <CubeFilters onChange={this.onInputChanged}
                     page={this.state.page} maxPages={this.state.maxPages}
                     loadPreviousPage={this.loadPreviousPage} loadNextPage={this.loadNextPage} />
        { cards }
      </div>
    );
  }

}


export default CubeSearchForm;