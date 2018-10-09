import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Contact extends Component {
    render() {
        return (
            <div>
                <p>Nos contacts</p>
                <Link to="/"> Retour à l'accueil </Link>
                {this.props.match.params.productNumber}

            </div>

        );
    }
}


export default Contact;