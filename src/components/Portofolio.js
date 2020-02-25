// Portofolio.js

import React, { Component } from 'react';
import axios from 'axios';
const apiURL  = 'http://diamsyah.com/service_website/index.php/All/portofolios/';

class Portofolio extends Component {
    state = {
        portofolios: [],
    }

    componentDidMount() {
        this.getPortofolio();
    }
    
    getPortofolio() {
        axios.get(apiURL).then(response => response.data).then((data) => {
            this.setState({ portofolios: data.data })
            console.log(this.state.portofolios)
        });
    }
  render() {
    return (
        <div className="container pt-4">
            <h3>Portofolio</h3><hr/>
            <div className="row">
                {this.state.portofolios.map((data) => (
                <div className="col-12 col-md-3" key={data.id} style={{marginBottom: '10px'}}>
                    <b><i className="fa fa-check"></i> {data.nama_portofolio}</b>
                    <p style={{marginLeft: '25px'}}>{data.deskripsi}</p>
                </div>
                ))}
            </div>
        </div>
    );
  }
}

export default Portofolio;