import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {browserHistory} from 'react-router';
import Footer from './footer.js';

import { bindActionCreators } from 'redux';

import {setUsername} from '../actions/index'


import { connect } from 'react-redux'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            error: '',
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        //this.handleUserChange = this.handleUserChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(evt) {
        evt.preventDefault();


        if (this.props.username !== "Admin") {
            return this.setState({error: 'Username is required'});
        }

        if (this.state.password !== 12345 ) {
            return this.setState({error: 'Password is required'});
        }
        this.setState({error: ''});
        localStorage.setItem("isAdmin", true);


        return  browserHistory.push('/profile');
    }

    // handleUserChange(evt) {
    //     this.setState({
    //         username: evt.target.value,
    //     });
    // };



    handlePassChange(evt) {

        this.setState({
            password: +evt.target.value,
        });
    }



    render() {

        const setUsername = this.props.setUsername;
        console.log(this.props)
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                {
                    this.state.error &&
                    <h3 data-test="error" onClick={this.dismissError}>
                        <Button onClick={this.dismissError}>✖</Button>
                        {this.state.error}
                    </h3>
                }

                <div>
                    <TextField type="text"
                               value={this.props.username}
                               onChange={(event) => {setUsername(event.target.value)}}>
                               placeholder="Login">
                               {/*onChange={this.handleUserChange}>*/}

                    </TextField>
                </div>
                <div>
                    <TextField type="password"
                               placeholder="password"
                               onChange={this.handlePassChange}>

                    </TextField>
                </div>

                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"

                    >
                        LogIn
                    </Button>
                </div>
            </form>
            < Footer />
            </div>
        )



    }
}

const mapStateToProps = (state) => ({

    username: state.username
})

const mapDispatchToProps = (dispatch) => {
    return {
        setUsername: bindActionCreators(setUsername,dispatch)

        }
    }


export default connect(mapStateToProps,mapDispatchToProps)(Login);