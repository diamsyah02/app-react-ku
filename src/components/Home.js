// Home.js

import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
        <div className="container text-center pt-4">
            <img src="http://diamsyah.com/service_website/assets/imgs/me.jpg" width="70%" className="rounded"/>
            <div className="pt-2">Website Pribadi</div>
            <h4>Diamsyah M Dida</h4>
            <pre>with React js</pre>
        </div>
    );
  }
}

export default Home;