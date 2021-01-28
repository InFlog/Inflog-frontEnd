import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { MDBBtn } from "mdbreact";
import * as actions from '../actions/app.action';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import axios from 'axios';
import config from '../configuration/config';

class TablePage extends React.Component {
  constructor() {
    super();
    this.state = {datatable:{rows:[],columns:[]}}
  }
  componentWillMount() {
  }

  goToDetailPage(influencer) {
    this.props.actions.storeInfluencerData(influencer);
    this.props.history.push("/DisplayInfluencer");
  }

  componentDidMount() {
    console.log('Component DID MOUNT!')
    axios.get(config.baseUrl + '/influencer').then(res => {
      console.log('response', res.data)

      var rows = res.data.map(influencer => {
        return { 
          ...influencer,
          actions: <MDBBtn color="primary" onClick={(e) => {
            this.goToDetailPage(influencer)
          }}>Go to details</MDBBtn>
        }
      })

      const data = {rows, columns:[{
        label: 'Influencer',
        field: 'influencerName',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'category',
        field: 'category',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Followers',
        field: 'followers',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Details',
        field: 'actions',
        sort: 'asc',
        width: 100,
      },
    
    ]}
      this.setState({ datatable: data })
    })
  } 


  render() {
    return (
      <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={this.state.datatable} searchTop searchBottom={false} />
    );
  }
};


const mapStateToProps = (state) => ({appState: state})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TablePage);
