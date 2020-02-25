// Profile.js

import React, { Component } from 'react';
import axios from 'axios';
const apiURL  = 'http://diamsyah.com/service_website/index.php/All/profiles/';
const apiURL2 = 'http://diamsyah.com/service_website/index.php/All/contacts/';

class Profile extends Component {
    state = {
        profiles: [],
        phone: [],
        email: []
    }

    componentDidMount() {
        this.getProfile();
        this.getContact();
    }

    getProfile(){
        axios.get(apiURL).then(response => response.data).then((data) => {
            this.setState({ profiles: data.data[0] })
            console.log(this.state.profiles)
        })
    }

    getContact(){
        axios.get(apiURL2).then(response => response.data).then((data) => {
            this.setState({ phone: data.data[0], email: data.data[1] })
            // this.setState({ email: data.data[1] })
            console.log(this.state.email.alamat_kontak)
        })
    }
    render() {
        return (
            <div className="container pt-4">
                <h3>Profile</h3><hr/>
                    <div align="left" className="table table-responsive">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <th width="20%" className="bg-light">Name</th>
                                    <td>{this.state.profiles.nama}</td>
                                </tr>
                                <tr>
                                    <th width="20%" className="bg-light">Place of birth</th>
                                    <td>{this.state.profiles.tempat_lahir}</td>
                                </tr>
                                <tr>
                                    <th width="20%" className="bg-light">Date of birth</th>
                                    <td>{this.state.profiles.tanggal_lahir}</td>
                                </tr>
                                <tr>
                                    <th width="20%" className="bg-light">Phone</th>
                                    <td>{this.state.phone.alamat_kontak}</td>
                                </tr>
                                <tr>
                                    <th width="20%" className="bg-light">Email</th>
                                    <td style={{textTransform: 'lowercase'}}>{this.state.email.alamat_kontak}</td>
                                </tr>
                                <tr>
                                    <th width="20%" className="bg-light">Address</th>
                                    <td>{this.state.profiles.alamat}</td>
                                </tr>
                                <tr>
                                    <th width="20%" className="bg-light">Note</th>
                                    <td>{this.state.profiles.lainnya}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
        );
    }
}

export default Profile;