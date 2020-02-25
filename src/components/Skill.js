// Skill.js

import React, { Component } from 'react';
import axios from 'axios';
const apiURL  = 'http://diamsyah.com/service_website/index.php/All/skills/';

class Skill extends Component {
    state = {
        skills: [],
    }

    componentDidMount() {
        this.getSkill();
    }
    
    getSkill() {
        axios.get(apiURL).then(response => response.data).then((data) => {
            this.setState({ skills: data.data })
            console.log(this.state.skills)
        });
    }
  render() {
    return (
        <div className="container pt-4">
            <h3>Skill</h3><hr/>
            <div className="row">
                {this.state.skills.map((data) => (
                <div className="col-12 col-md-3" key={data.id} style={{marginBottom: '10px'}}>
                    <div className="card">
                        <img src={data.foto} className="card-img-top" width="100%" height="290"/>
                        <div className="card-body">
                            <p className="card-text text-center">{data.nama_kemampuan}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
  }
}

export default Skill;