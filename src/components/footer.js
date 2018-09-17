import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {browserHistory, Link} from 'react-router';

class Footer extends Component {

    render() {
        return (
            <div>
                <footer>
                    <ul>

                        <li>< Link to = "/profile" >profile </Link> </li>
                        <li> < Link to = "/news" >news </Link></li>
                        <li> < Link to = "/login" >login </Link></li>
                        <li> < Link to = "/" >Main </Link></li>
                    </ul>
                </footer>
            </div>
        )
    }
}

export default Footer;