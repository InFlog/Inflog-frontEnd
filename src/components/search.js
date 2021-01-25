import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import axios from 'axios';
export default class TablePage extends React.Component {
  constructor() {
    super();
    this.state = {datatable:{rows:[],columns:[]}}
  }
  componentWillMount() {
  }
  componentDidMount() {
    console.log('Component DID MOUNT!')
    axios.get('http://localhost:1000/brand').then(res => {
      console.log('response', res.data)
      const data = {rows:res.data,columns:[{
        label: 'brandName',
        field: 'brandName',
    /*     label: 'service',
        field: 'service', */
        sort: 'asc',
        width: 100,
      }]}
      this.setState({ datatable: data })
    })
  } 


  render() {
    return (
      <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={this.state.datatable} searchTop searchBottom={false} />
    );
  }
};

// export default TablePage;

