import React, { Component } from 'react';
import './App.css';
import './mentions/TextArea.scss';

import TextArea from './mentions/TextArea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="lipsum">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            pellentesque orci libero, et suscipit est venenatis ac. Cras ac
            ultrices diam, sed tristique leo. Proin et libero a nulla mollis
            tempor. Suspendisse ultrices auctor nisl. Etiam a felis enim. Sed
            finibus nunc ligula, ut accumsan felis laoreet id. Ut fringilla,
            lectus non condimentum vulputate, nibh risus faucibus mauris, non
            ullamcorper urna sapien a augue. Vestibulum non felis felis. Aenean
            faucibus urna erat, eu scelerisque sapien sodales eu.
          </p>
          <p>
            Integer tincidunt finibus sapien, vitae consectetur ligula accumsan
            at. Morbi ligula urna, accumsan ac augue at, sodales bibendum magna.
            Phasellus non tortor arcu. Quisque maximus ligula dolor. Nunc lectus
            sapien, pretium quis velit eget, viverra vulputate erat. Mauris
            vestibulum placerat lacus, non luctus mi luctus et. Nunc ornare,
            tellus eget tempor consectetur, ipsum ipsum ultricies nulla, at
            mollis odio arcu et enim. Donec porttitor rutrum orci, id elementum
            risus aliquam id. Sed at turpis ultricies, varius sapien a, dictum
            elit.
          </p>
          <p>
            Sed eleifend turpis erat. Donec at mauris neque. Nam est sapien,
            ultrices sed tempus in, rutrum eu velit. Sed at lorem venenatis,
            convallis neque in, suscipit ipsum. Maecenas sit amet sodales lorem.
            Proin ac dictum velit. Donec aliquam, sem ut condimentum tempor,
            risus est sollicitudin felis, vitae elementum urna arcu vel lectus.
            Curabitur condimentum nibh non nulla semper accumsan quis a nisl.
          </p>
          <p>
            Sed posuere nunc in lobortis interdum. Integer vulputate, urna sit
            amet sagittis aliquam, odio velit commodo ipsum, ut vestibulum augue
            tortor ut erat. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia Curae; Quisque vel viverra neque, non
            scelerisque arcu. Morbi sem magna, tempus aliquam sem ut, consequat
            aliquet nisi. Suspendisse gravida, diam non efficitur pellentesque,
            lectus sapien aliquet mauris, eget tristique dui nisl dignissim
            nibh. Aliquam commodo pretium augue tincidunt vulputate. Morbi
            iaculis justo at tellus dapibus, a vestibulum est interdum. Proin
            malesuada ex ut blandit suscipit. In molestie semper molestie.
            Integer euismod turpis at ultricies porttitor. Nam a interdum
            tellus. Aenean quis rhoncus ipsum, vitae sodales sem. Integer ut
            egestas ex, ut accumsan eros.
          </p>
          <p>
            Sed semper eleifend scelerisque. Etiam quam tellus, blandit id
            dignissim at, cursus at eros. Vivamus id quam nec mauris feugiat
            aliquet. Aenean ac commodo justo, sit amet tristique enim.
            Suspendisse pulvinar auctor ex nec dictum. Duis feugiat risus ut
            venenatis convallis. Nunc sed vestibulum risus. Duis odio nibh,
            posuere eu sollicitudin ac, tempus ut nisi.
          </p>
        </div>
        <div>
          <div>hello</div>
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
            It should go back to overflow auto(with scrollbar) if reaches the
            max height.
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
          <div id="lipsum">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              pellentesque orci libero, et suscipit est venenatis ac. Cras ac
              ultrices diam, sed tristique leo. Proin et libero a nulla mollis
              tempor. Suspendisse ultrices auctor nisl. Etiam a felis enim. Sed
              finibus nunc ligula, ut accumsan felis laoreet id. Ut fringilla,
              lectus non condimentum vulputate, nibh risus faucibus mauris, non
              ullamcorper urna sapien a augue. Vestibulum non felis felis.
              Aenean faucibus urna erat, eu scelerisque sapien sodales eu.
            </p>
            <p>
              Integer tincidunt finibus sapien, vitae consectetur ligula
              accumsan at. Morbi ligula urna, accumsan ac augue at, sodales
              bibendum magna. Phasellus non tortor arcu. Quisque maximus ligula
              dolor. Nunc lectus sapien, pretium quis velit eget, viverra
              vulputate erat. Mauris vestibulum placerat lacus, non luctus mi
              luctus et. Nunc ornare, tellus eget tempor consectetur, ipsum
              ipsum ultricies nulla, at mollis odio arcu et enim. Donec
              porttitor rutrum orci, id elementum risus aliquam id. Sed at
              turpis ultricies, varius sapien a, dictum elit.
            </p>
            <p>
              Sed eleifend turpis erat. Donec at mauris neque. Nam est sapien,
              ultrices sed tempus in, rutrum eu velit. Sed at lorem venenatis,
              convallis neque in, suscipit ipsum. Maecenas sit amet sodales
              lorem. Proin ac dictum velit. Donec aliquam, sem ut condimentum
              tempor, risus est sollicitudin felis, vitae elementum urna arcu
              vel lectus. Curabitur condimentum nibh non nulla semper accumsan
              quis a nisl.
            </p>
            <p>
              Sed posuere nunc in lobortis interdum. Integer vulputate, urna sit
              amet sagittis aliquam, odio velit commodo ipsum, ut vestibulum
              augue tortor ut erat. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia Curae; Quisque vel viverra
              neque, non scelerisque arcu. Morbi sem magna, tempus aliquam sem
              ut, consequat aliquet nisi. Suspendisse gravida, diam non
              efficitur pellentesque, lectus sapien aliquet mauris, eget
              tristique dui nisl dignissim nibh. Aliquam commodo pretium augue
              tincidunt vulputate. Morbi iaculis justo at tellus dapibus, a
              vestibulum est interdum. Proin malesuada ex ut blandit suscipit.
              In molestie semper molestie. Integer euismod turpis at ultricies
              porttitor. Nam a interdum tellus. Aenean quis rhoncus ipsum, vitae
              sodales sem. Integer ut egestas ex, ut accumsan eros.
            </p>
            <p>
              Sed semper eleifend scelerisque. Etiam quam tellus, blandit id
              dignissim at, cursus at eros. Vivamus id quam nec mauris feugiat
              aliquet. Aenean ac commodo justo, sit amet tristique enim.
              Suspendisse pulvinar auctor ex nec dictum. Duis feugiat risus ut
              venenatis convallis. Nunc sed vestibulum risus. Duis odio nibh,
              posuere eu sollicitudin ac, tempus ut nisi.
            </p>
          </div>
          <div id="lipsum">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              pellentesque orci libero, et suscipit est venenatis ac. Cras ac
              ultrices diam, sed tristique leo. Proin et libero a nulla mollis
              tempor. Suspendisse ultrices auctor nisl. Etiam a felis enim. Sed
              finibus nunc ligula, ut accumsan felis laoreet id. Ut fringilla,
              lectus non condimentum vulputate, nibh risus faucibus mauris, non
              ullamcorper urna sapien a augue. Vestibulum non felis felis.
              Aenean faucibus urna erat, eu scelerisque sapien sodales eu.
            </p>
            <p>
              Integer tincidunt finibus sapien, vitae consectetur ligula
              accumsan at. Morbi ligula urna, accumsan ac augue at, sodales
              bibendum magna. Phasellus non tortor arcu. Quisque maximus ligula
              dolor. Nunc lectus sapien, pretium quis velit eget, viverra
              vulputate erat. Mauris vestibulum placerat lacus, non luctus mi
              luctus et. Nunc ornare, tellus eget tempor consectetur, ipsum
              ipsum ultricies nulla, at mollis odio arcu et enim. Donec
              porttitor rutrum orci, id elementum risus aliquam id. Sed at
              turpis ultricies, varius sapien a, dictum elit.
            </p>
            <p>
              Sed eleifend turpis erat. Donec at mauris neque. Nam est sapien,
              ultrices sed tempus in, rutrum eu velit. Sed at lorem venenatis,
              convallis neque in, suscipit ipsum. Maecenas sit amet sodales
              lorem. Proin ac dictum velit. Donec aliquam, sem ut condimentum
              tempor, risus est sollicitudin felis, vitae elementum urna arcu
              vel lectus. Curabitur condimentum nibh non nulla semper accumsan
              quis a nisl.
            </p>
            <p>
              Sed posuere nunc in lobortis interdum. Integer vulputate, urna sit
              amet sagittis aliquam, odio velit commodo ipsum, ut vestibulum
              augue tortor ut erat. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia Curae; Quisque vel viverra
              neque, non scelerisque arcu. Morbi sem magna, tempus aliquam sem
              ut, consequat aliquet nisi. Suspendisse gravida, diam non
              efficitur pellentesque, lectus sapien aliquet mauris, eget
              tristique dui nisl dignissim nibh. Aliquam commodo pretium augue
              tincidunt vulputate. Morbi iaculis justo at tellus dapibus, a
              vestibulum est interdum. Proin malesuada ex ut blandit suscipit.
              In molestie semper molestie. Integer euismod turpis at ultricies
              porttitor. Nam a interdum tellus. Aenean quis rhoncus ipsum, vitae
              sodales sem. Integer ut egestas ex, ut accumsan eros.
            </p>
            <p>
              Sed semper eleifend scelerisque. Etiam quam tellus, blandit id
              dignissim at, cursus at eros. Vivamus id quam nec mauris feugiat
              aliquet. Aenean ac commodo justo, sit amet tristique enim.
              Suspendisse pulvinar auctor ex nec dictum. Duis feugiat risus ut
              venenatis convallis. Nunc sed vestibulum risus. Duis odio nibh,
              posuere eu sollicitudin ac, tempus ut nisi.
            </p>
          </div>
          <div id="lipsum">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              pellentesque orci libero, et suscipit est venenatis ac. Cras ac
              ultrices diam, sed tristique leo. Proin et libero a nulla mollis
              tempor. Suspendisse ultrices auctor nisl. Etiam a felis enim. Sed
              finibus nunc ligula, ut accumsan felis laoreet id. Ut fringilla,
              lectus non condimentum vulputate, nibh risus faucibus mauris, non
              ullamcorper urna sapien a augue. Vestibulum non felis felis.
              Aenean faucibus urna erat, eu scelerisque sapien sodales eu.
            </p>
            <p>
              Integer tincidunt finibus sapien, vitae consectetur ligula
              accumsan at. Morbi ligula urna, accumsan ac augue at, sodales
              bibendum magna. Phasellus non tortor arcu. Quisque maximus ligula
              dolor. Nunc lectus sapien, pretium quis velit eget, viverra
              vulputate erat. Mauris vestibulum placerat lacus, non luctus mi
              luctus et. Nunc ornare, tellus eget tempor consectetur, ipsum
              ipsum ultricies nulla, at mollis odio arcu et enim. Donec
              porttitor rutrum orci, id elementum risus aliquam id. Sed at
              turpis ultricies, varius sapien a, dictum elit.
            </p>
            <p>
              Sed eleifend turpis erat. Donec at mauris neque. Nam est sapien,
              ultrices sed tempus in, rutrum eu velit. Sed at lorem venenatis,
              convallis neque in, suscipit ipsum. Maecenas sit amet sodales
              lorem. Proin ac dictum velit. Donec aliquam, sem ut condimentum
              tempor, risus est sollicitudin felis, vitae elementum urna arcu
              vel lectus. Curabitur condimentum nibh non nulla semper accumsan
              quis a nisl.
            </p>
            <p>
              Sed posuere nunc in lobortis interdum. Integer vulputate, urna sit
              amet sagittis aliquam, odio velit commodo ipsum, ut vestibulum
              augue tortor ut erat. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia Curae; Quisque vel viverra
              neque, non scelerisque arcu. Morbi sem magna, tempus aliquam sem
              ut, consequat aliquet nisi. Suspendisse gravida, diam non
              efficitur pellentesque, lectus sapien aliquet mauris, eget
              tristique dui nisl dignissim nibh. Aliquam commodo pretium augue
              tincidunt vulputate. Morbi iaculis justo at tellus dapibus, a
              vestibulum est interdum. Proin malesuada ex ut blandit suscipit.
              In molestie semper molestie. Integer euismod turpis at ultricies
              porttitor. Nam a interdum tellus. Aenean quis rhoncus ipsum, vitae
              sodales sem. Integer ut egestas ex, ut accumsan eros.
            </p>
            <p>
              Sed semper eleifend scelerisque. Etiam quam tellus, blandit id
              dignissim at, cursus at eros. Vivamus id quam nec mauris feugiat
              aliquet. Aenean ac commodo justo, sit amet tristique enim.
              Suspendisse pulvinar auctor ex nec dictum. Duis feugiat risus ut
              venenatis convallis. Nunc sed vestibulum risus. Duis odio nibh,
              posuere eu sollicitudin ac, tempus ut nisi.
            </p>
          </div>
          <div id="lipsum">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              pellentesque orci libero, et suscipit est venenatis ac. Cras ac
              ultrices diam, sed tristique leo. Proin et libero a nulla mollis
              tempor. Suspendisse ultrices auctor nisl. Etiam a felis enim. Sed
              finibus nunc ligula, ut accumsan felis laoreet id. Ut fringilla,
              lectus non condimentum vulputate, nibh risus faucibus mauris, non
              ullamcorper urna sapien a augue. Vestibulum non felis felis.
              Aenean faucibus urna erat, eu scelerisque sapien sodales eu.
            </p>
            <p>
              Integer tincidunt finibus sapien, vitae consectetur ligula
              accumsan at. Morbi ligula urna, accumsan ac augue at, sodales
              bibendum magna. Phasellus non tortor arcu. Quisque maximus ligula
              dolor. Nunc lectus sapien, pretium quis velit eget, viverra
              vulputate erat. Mauris vestibulum placerat lacus, non luctus mi
              luctus et. Nunc ornare, tellus eget tempor consectetur, ipsum
              ipsum ultricies nulla, at mollis odio arcu et enim. Donec
              porttitor rutrum orci, id elementum risus aliquam id. Sed at
              turpis ultricies, varius sapien a, dictum elit.
            </p>
            <p>
              Sed eleifend turpis erat. Donec at mauris neque. Nam est sapien,
              ultrices sed tempus in, rutrum eu velit. Sed at lorem venenatis,
              convallis neque in, suscipit ipsum. Maecenas sit amet sodales
              lorem. Proin ac dictum velit. Donec aliquam, sem ut condimentum
              tempor, risus est sollicitudin felis, vitae elementum urna arcu
              vel lectus. Curabitur condimentum nibh non nulla semper accumsan
              quis a nisl.
            </p>
            <p>
              Sed posuere nunc in lobortis interdum. Integer vulputate, urna sit
              amet sagittis aliquam, odio velit commodo ipsum, ut vestibulum
              augue tortor ut erat. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia Curae; Quisque vel viverra
              neque, non scelerisque arcu. Morbi sem magna, tempus aliquam sem
              ut, consequat aliquet nisi. Suspendisse gravida, diam non
              efficitur pellentesque, lectus sapien aliquet mauris, eget
              tristique dui nisl dignissim nibh. Aliquam commodo pretium augue
              tincidunt vulputate. Morbi iaculis justo at tellus dapibus, a
              vestibulum est interdum. Proin malesuada ex ut blandit suscipit.
              In molestie semper molestie. Integer euismod turpis at ultricies
              porttitor. Nam a interdum tellus. Aenean quis rhoncus ipsum, vitae
              sodales sem. Integer ut egestas ex, ut accumsan eros.
            </p>
            <p>
              Sed semper eleifend scelerisque. Etiam quam tellus, blandit id
              dignissim at, cursus at eros. Vivamus id quam nec mauris feugiat
              aliquet. Aenean ac commodo justo, sit amet tristique enim.
              Suspendisse pulvinar auctor ex nec dictum. Duis feugiat risus ut
              venenatis convallis. Nunc sed vestibulum risus. Duis odio nibh,
              posuere eu sollicitudin ac, tempus ut nisi.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
