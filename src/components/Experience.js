// Experience.js

import React, { Component } from 'react';
import axios from 'axios';
const apiURL  = 'http://diamsyah.com/service_website/index.php/All/experiences/';

class Experience extends Component {
    state = {
        experiences: [],
        index: 0
    }

    componentDidMount() {
        this.getExperience();
    }
    
    getExperience() {
        axios.get(apiURL).then(response => response.data).then((data) => {
            this.setState({ experiences: data.data })
            console.log(this.state.experiences)
        });
    }
  render() {
    return (
        <div className="container pt-4">
            <h3>Experience</h3><hr/>
            <div className="row">
                {this.state.experiences.map((data) => (
                <div className="col-12" key={data.id} style={{marginBottom: '25px'}}>
                    <h5>{this.state.index+1}. {data.nama_perusahaan}</h5>
                    <div className="table table-responsive">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <th width="20%" className="bg-light">Job Position</th>
                                    <td>{data.posisi_pekerjaan}</td>
                                </tr>
                                <tr>
                                    <th width="20%" className="bg-light">Periode</th>
                                    <td>{data.mulai_kerja} - {data.selesai_kerja}</td>
                                </tr>
                                <tr>
                                    <th width="20%" className="bg-light">responsible</th>
                                    <td>{data.tanggung_jawab}</td>
                                </tr>
                                <tr>
                                    <th width="20%" className="bg-light">workplace address</th>
                                    <td>{data.alamat_tempat_kerja}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
  }
}

export default Experience;