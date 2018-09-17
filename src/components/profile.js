import React, {Component} from 'react';
import Footer from './footer.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {browserHistory, Link} from 'react-router';

class Profile extends Component {
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
            <div>   Сти́вен Пол Джобс — американский предприниматель, изобретатель и промышленный дизайнер, получивший широкое признание в качестве пионера эры информационных технологий. Один из основателей, председатель совета директоров и CEO корпорации Apple. Один из основателей и CEO киностудии Pixar.
                < Footer />
            </div>

        )
    }
}

export default Profile;