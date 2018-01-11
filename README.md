# React Mentions Plugin

A very simple, but awesome textarea component that allows you to "@mention" someone in a text message.

![My Image](https://raw.githubusercontent.com/johndavedecano/react-mention-plugin/master/screenshot.png)

## Installation

`npn install react-mention-plugin --save`

## Basic Usage

```
import TextArea from 'react-mention-plugin';

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
];

// Basic usage. With scrollbar if overflows
<TextArea suggestions={suggestions} />

// Auto resize without height limit
<TextArea suggestions={suggestions} autoResize/>

// Auto resize with maximum height. When reaches the maximum height, scrollbar shows.
<TextArea suggestions={suggestions} autoResize autoResizeMaxHeight={200} />


// Public methods
<TextArea ref={textarea => this.textarea = textarea} suggestions={suggestions} />

# this.textarea.blur()
# this.textarea.focus()
# this.textarea.clearContent()
# this.textarea.setContent()
# this.textarea.openMention()
# this.textarea.closeMention()
```

## Development

```
# The component is built on top of create-react-app so need to have it installed on your system.
npm run start
```
