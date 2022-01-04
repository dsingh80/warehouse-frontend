import React, { Component } from 'react';
import ThobiasAPI from '../api/ThobiasAPI';
import CubeCardGrid from './CubeCardGrid';
import CubeCardList from './CubeCardList';
import CubeFilters from './CubeFilters';


class CubeSearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterSearchTerm: '',
      page: 0,
      maxPages: 0,
      results: []
    };

    this.resultsPerPage = 20;
    this.onInputChanged = this.onInputChanged.bind(this);
    this.loadPreviousPage = this.loadPreviousPage.bind(this);
    this.loadNextPage = this.loadNextPage.bind(this);
    this.loadPage = this.loadPage.bind(this);
  }


  componentDidUpdate(prevProps, prevState) {
    if(this.state.filterSearchTerm !== prevState.filterSearchTerm) {
      this.loadPage(1);
    }
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


  loadPage(page) {
    let endpoint = '/product/' + this.state.filterSearchTerm;
    endpoint += '?sort=' + encodeURIComponent('aisle row column');
    endpoint += '&page=' + page;
    endpoint += '&limit=' + this.resultsPerPage;
    ThobiasAPI.sendRequest('GET', endpoint, null, (err, data) => {
      if(err) { console.error(err); return; }
      this.setState({
        page: data.page,
        maxPages: data.totalPages,
        results: data.docs
      })
    });
  }


  loadPreviousPage() {
    if(this.state.page <= 1) { return; }
    this.loadPage(this.state.page - 1);
  }


  loadNextPage() {
    if(this.state.page >= this.state.maxPages) { return; }
    this.loadPage(this.state.page + 1);
  }


  render() {
    let cards;
    if(this.state.filterViewType === 'grid') {
      cards = (<CubeCardGrid cubes={this.state.results} />);
    }
    else {
      cards = (<CubeCardList cubes={this.state.results} />);
    }


    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <img className='col-8 col-md-8'
               src='https://cdn.shopify.com/s/files/1/0555/9681/0419/files/THOBIAS-LOGO-BLACK-REC_copy.png?v=1617405114'
               alt='Logo' />
        </div>
        <CubeFilters onChange={this.onInputChanged}
                     page={this.state.page} maxPages={this.state.maxPages}
                     loadPreviousPage={this.loadPreviousPage} loadNextPage={this.loadNextPage} />
        { cards }
      </div>
    );
  }

}


export default CubeSearchForm;