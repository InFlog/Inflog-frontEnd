// import React, { Component } from 'react'
// import { Button } from 'react-bootstrap';
// import axios from 'axios';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../actions/app.action';

// class DetailsButton extends Component {
//     constructor(props) {
//         super(props)
//     }

//     displayUser = async () => {
//         const response = await axios.get(`http://localhost:1000/influencer/${this.props.influencerId}`)
//         console.log(response.data);
//         const influencer = response.data;

//         this.props.actions.displayOtherUser(influencer);
//         console.log(this.props.applicationState.otherUser)
//     }
//     render() {
//         return (
//             <Button variant="primary" onClick={this.displayUser}>
//                 See more
//             </Button>
//         )
//     }
// }

// const mapStateToProps = state => ({ applicationState: state });
// const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
// export default connect(mapStateToProps, mapDispatchToProps)(DetailsButton);
