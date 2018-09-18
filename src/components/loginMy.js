import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {browserHistory} from 'react-router';
import Footer from './footer.js';
import { bindActionCreators } from 'redux';
import {setUsername, setPassword, setError} from '../actions/index'
import { connect } from 'react-redux'

class Login extends Component {
    constructor() {
        super();

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();

        if (this.props.username !== "Admin"
            || this.props.password !== "12345" ) {
            return this.props.setError("Имя пользователя или пароль введены не верно");
        }

        this.props.setError("");
        localStorage.setItem("isAdmin", true);

        return  browserHistory.push('/profile');
    }

    render() {

        const setUsername = this.props.setUsername;
        const setPassword = this.props.setPassword;

        return (
            <div>
            <form  onSubmit = {this.handleSubmit}>
                {
                    this.props.error &&
                    <h3>
                        {this.props.error}
                    </h3>
                }

                <div>
                    <TextField type="text"
                               value={this.props.username}
                               onChange={(event) => {setUsername(event.target.value)}}>
                               placeholder="Login">
                    </TextField>
                </div>
                <div>
                    <TextField type="password"
                               value={this.props.password}
                               onChange={(event) => {setPassword(event.target.value)}}>
                               placeholder="password">
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

    username: state.username,
    password: state.password,
    error: state.error
})

const mapDispatchToProps = (dispatch) => {
    return {
        setUsername: bindActionCreators(setUsername,dispatch),
        setPassword: bindActionCreators(setPassword,dispatch),
        setError: bindActionCreators(setError,dispatch)
        }
    }


export default connect(mapStateToProps,mapDispatchToProps)(Login);