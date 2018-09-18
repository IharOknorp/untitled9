import React, {Component} from 'react';
import Footer from './footer.js';
import {Link} from 'react-router';

class Main extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <ul>
                    <li><Link to = "/profile" >profile </Link> </li>
                    <li><Link to = "/news" >news </Link></li>
                </ul>
               <Footer />
            </div>
        )
    }
}

export default Main;