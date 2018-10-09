import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class History extends Component {
    render() {
        return (
            <div>
                <p>Notre histoire</p>
                <Link to="/"> Retour à l'accueil </Link>
                {this.props.match.params.productNumber}
            </div>
        );
    }
}


export default History;

