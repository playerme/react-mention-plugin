# React Mention Plugin

A very simple, but awesome textarea component that allows you to "@mention" someone in a text message.

![My Image](https://raw.githubusercontent.com/johndavedecano/react-mention-plugin/master/screenshot.png)

## Installation

`npn install react-mention-plugin --save`

## Basic Usage

```
import TextArea from 'react-mention-plugin';
import 'react-mention-plugin/lib/TextArea.css';

const suggestions = [
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
  }
];

<TextArea suggestions={suggestions} />
```

### Properties

1. **suggestions(array)** - An array of suggestions.
2. **autoResize(bool)** - Tells the component which automatically adjusts its height to match the content.
3. **autoResizeMaxHeight(int)** - Auto resize with maximum height. When reaches the maximum height, scrollbar shows.
4. **trigger(string)** - Default is @ but you can also use #. This is the one that triggers to show our mention suggestions list.

### Public Methods

Before you can use the public method, you have to first create a reference for the textarea for example

`<Textarea ref={textarea => this.textarea = textarea} />`

1. this.textarea.blur()
2. this.textarea.focus()
3. this.textarea.clearValue()
4. this.textarea.setValue()
5. this.textarea.openMention()
6. this.textarea.closeMention()

### Events

1. **onSubmit** - CTRL + ENTER or CMD + ENTER on mac. Returns event object and state.value as second argument.
2. **onChange** - Happens when the textarea value changes.
3. **onActivated** - When mention suggestion gets activated.
4. **onSearch** - Happens when mention is triggered. Returns then keyword that can be used on performing search somewhere or API.

## Development

```
# The component is built on top of create-react-app so need to have it installed on your system.
npm run start
```

## Credits

This react component is coded by [John Dave Decano](http://johndavedecano.me). Thanks to the following.

1. [ReactJS](https://reactjs.org/)
2. [PopperJS](https://popper.js.org)
3. ReactDOM
4. PropTypes
