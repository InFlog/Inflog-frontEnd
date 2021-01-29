import React, { Component } from 'react'
import * as actions from '../actions/app.action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';


class PersonalPageButton extends Component {
    constructor(props) {
        super(props)
    }

    PersonalPage = () => {
        this.props.history.push("/personalpageInfluencer")
    }


    render() {
        return (
            <Button onClick={this.PersonalPage} variant="primary">
                Profile
            </Button>
        )
    }
}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(PersonalPageButton);