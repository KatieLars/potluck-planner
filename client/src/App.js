import React, { Component } from 'react';
import {Navbar, Nav, Container} from 'reactstrap'


class App extends Component {
  render() {
    return (
      <div class="navbar">
        <div class="navbar-inner">
          <a href="#">Title</a>
            <ul class="nav">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
        </div>
      </div>

    );
  }
}

export default App;
