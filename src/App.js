import React, { Component } from 'react';
import './App.css';

import TextArea from './mentions/TextArea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Basic Example</h1>
        <p>With scrollbar.</p>
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
        <h1>Auto Resize</h1>
        <pre>autoResize=true</pre>
        <TextArea
          autoResize={true}
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

        <h1>Auto Resize with Max Height</h1>
        <p>
          It should go back to overflow auto(with scrollbar) if reaches the max
          height.
        </p>
        <pre>autoResize=true autoResizeMaxHeight=200</pre>
        <TextArea
          autoResizeMaxHeight={200}
          autoResize={true}
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
