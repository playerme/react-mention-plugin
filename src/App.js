import React, { Component } from 'react';
import './App.css';

import TextArea from './mentions/TextArea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TextArea
          suggestions={[
            {
              id: 1,
              avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
              value: 'Fred_Smith',
              label: 'Fred Smith',
            },
            {
              id: 2,
              avatar: 'https://randomuser.me/api/portraits/men/59.jpg',
              value: 'Ronald_Horn',
              label: 'Ronald Horn',
            },
            {
              id: 3,
              avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
              value: 'Joseph_Jones',
              label: 'Joseph Jones',
            },
            {
              id: 4,
              avatar: 'https://randomuser.me/api/portraits/men/39.jpg',
              value: 'Kumar_Patel',
              label: 'Kumar Patel',
            },
          ]}
        />
      </div>
    );
  }
}

export default App;
