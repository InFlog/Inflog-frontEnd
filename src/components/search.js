
/* import React from 'react';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';

 class DatatablePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        username: "",
        password: "",
        showButton: false,
        to: false,
        showSuccess: false,
        variant: "success",
        text: '',
    }
}
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Field',
        field: 'field',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Start date',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Salary',
        field: 'salary',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {

      }
    ]
  };
  render() {
  return (
    <MDBDataTable
      striped
      hover
      data={data}
    />
  );
}
 }
export default DatatablePage; */



import React from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
/* import PersonalPageInfluencer from 'PersonalPageInfluencer'; */
import  {Link} from "react-router-dom";
import search2 from './search2';

const DatatablePage = () => {
 
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Office',
        field: 'office',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Start date',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Salary',
        field: 'salary',
        sort: 'asc',
        width: 100
      },
      {
        details: 'Details',
        field: 'details',
        sort: 'asc',
        width: 100,
      }
    ],
    rows: [
      {
        name: 'InfluencerName',
        position: 'System Architect',
        office: 'Edinburgh',
        age: '61',
        date: '2011/04/25',
        salary: '$320',
        Details: <Link to="/PersonalPageInfluencer"></Link>
      },
     
    ]
  };

  return (
    <MDBDataTable
      striped
      hover
      data={data}
    />
  );
}

export default DatatablePage;