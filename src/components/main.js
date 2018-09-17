import React, {Component} from 'react';
import Footer from './footer.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {browserHistory, Link} from 'react-router';

class Main extends Component {
    constructor() {
        super();
        this.state = {

        };

        this.handlePassChange = this.handlePassChange.bind(this);


    }
    handlePassChange() {

    }





    render() {
        return (
            <div>
                <ul>
                    <li>< Link to = "/profile" >profile </Link> </li>
                    <li> < Link to = "/news" >news </Link></li>
                </ul>
               < Footer />
            </div>
        )
    }
}

export default Main;