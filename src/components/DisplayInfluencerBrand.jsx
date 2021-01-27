// import React, { Component } from 'react'
// import axios from 'axios';
// import Table from 'react-bootstrap/Table'
// import { Button } from 'react-bootstrap';
// import DetailsButton from './DetailsButton';

// class DisplayInfluencerBrand extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             influencers: []
//         }
//     }

//     componentDidMount = async () => {
//         const response = await axios.get(`http://localhost:1000/influencer`);
//         const influencer = response.data;
//         this.setState({
//             influencers: influencer
//         })
//     }


//     render() {
//         return (
//             <div>
//                 <Table striped bordered hover variant="dark">
//                     <thead>
//                         <tr>

//                             <th>Influencer</th>
//                             <th>Followers</th>
//                             <th>See more</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.state.influencers.map(influencer => {
//                             return (
//                                 <tr key={influencer._id}>
//                                     <td>
//                                         {influencer.influencerName}
//                                     </td>
//                                     <td>
//                                         {influencer.followers}
//                                     </td>
//                                     <td>
//                                         <DetailsButton influencerId={influencer._id} />

//                                     </td>

//                                 </tr>
//                             )
//                         })}
//                     </tbody>
//                 </Table>
//             </div>
//         )
//     }
// }

// export default DisplayInfluencerBrand