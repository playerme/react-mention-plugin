import React, { Component } from 'react';
import './App.css';
import './mentions/TextArea.scss';

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

        <h1>Custom Trigger</h1>
        <p>By default we use @ sign but you can also use # for hash tag.</p>
        <TextArea
          trigger="#"
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
              id: 15,
              avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
              value: 'Fred_Smith',
              label: 'Fred Smith',
            },
            {
              id: 25,
              avatar: 'https://randomuser.me/api/portraits/men/59.jpg',
              value: 'Ronald_Horn',
              label: 'Ronald Horn',
            },
            {
              id: 35,
              avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
              value: 'Joseph_Jones',
              label: 'Joseph Jones',
            },
            {
              id: 45,
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
              value: 'Fred_Smithwet',
              label: 'Fred Smithwetw',
            },
            {
              id: 2,
              avatar: 'https://randomuser.me/api/portraits/men/59.jpg',
              value: 'Ronald_Hornetw',
              label: 'Ronald Horntwet',
            },
            {
              id: 3,
              avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
              value: 'Joseph_Joneswetwt',
              label: 'Joseph Joneswet',
            },
            {
              id: 4,
              avatar: 'https://randomuser.me/api/portraits/men/39.jpg',
              value: 'Kumar_Patel25235',
              label: 'Kumar Pateltwt',
            },
            {
              id: 14,
              avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
              value: 'Fred_Smith325252',
              label: 'Fred Smith53252',
            },
            {
              id: 24,
              avatar: 'https://randomuser.me/api/portraits/men/59.jpg',
              value: 'Ronald_Horn44',
              label: 'Ronald Horn44',
            },
            {
              id: 34,
              avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
              value: 'Joseph_Jones44',
              label: 'Joseph Jones',
            },
            {
              id: 44,
              avatar: 'https://randomuser.me/api/portraits/men/39.jpg',
              value: 'Kumar_Patel2',
              label: 'Kumar Patel4',
            },
          ]}
          onSubmit={(event, value) => {
            console.log(value);
          }}
        />
      </div>
    );
  }
}

export default App;
