// Education.js

import React, { Component } from 'react';
import axios from 'axios';
const apiURL  = 'http://diamsyah.com/service_website/index.php/All/educations/';

class Education extends Component {
    state = {
        educations: [],
    }

    componentDidMount() {
        this.getEducation();
    }
    
    getEducation() {
        axios.get(apiURL).then(response => response.data).then((data) => {
            this.setState({ educations: data.data })
            console.log(this.state.educations)
        });
    }
  render() {
    return (
        <div className="container pt-4">
            <h3>Education</h3><hr/>
            <div className="row">
                {this.state.educations.map((data) => (
                <div className="col-12 col-md-4" key={data.id} style={{marginBottom: '10px'}}>
                    <div className="card">
                        <img src={data.foto} className="card-img-top" width="100%" height="290"/>
                        <div className="card-body">
                            <h4 className="card-title">{data.nama_sekolah}</h4>
                            <p className="card-text">{data.mulai_sekolah} - {data.selesai_sekolah}</p>
                        </div>
                    </div>
                </div>  
                ))}
            </div>
        </div>
    );
  }
}

export default Education;