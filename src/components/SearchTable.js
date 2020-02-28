import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import '../styles/SearchTable.scss';

class SearchTable extends Component {

  render() {
    const data = this.props.data;
    const { SearchBar } = Search;
    const columns = [{
        dataField: 'ID',
        text: 'ID',
        hidden: true
      }, {
        dataField: 'Name',
        text: 'Patch Name',
        sort: true
      }, {
        dataField: 'ExName',
        text: 'Expansion',
        sort: true
      }, {
        dataField: 'ReleaseDate',
        text: 'Release Date'
      }];

    return (
      <ToolkitProvider
        keyField='ID' 
        data={ data } 
        sort={ { dataField: 'Name', order: 'asc' } } 
        columns={ columns } 
        overlay
        search={ { } }
      >
        {
          props => (
            <div>
              <h3>Try the search bar!</h3>
              <SearchBar { ...props.searchProps} placeholder={"Search some patches!"} />
              <hr />
              <BootstrapTable { ...props.baseProps } pagination={ paginationFactory() } />
            </div>
          )
        }
      </ToolkitProvider>
    );
  }
}

export default SearchTable;