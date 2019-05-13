# React Video Preview Selector

This react component returns the latest selected frame on a video, so you can select the thumbnail you want.


# Installation

You can install using:

- NPM 

    `npm i interacso-team/react-previewer`
- Yarn 

    `yarn add interacso-team/react-previewer`


## For latest unstable changes

-  `yarn add interacso-team/react-previewer#devel`


# Example

```JSX
import React from 'react'
import { render } from 'react-dom'
import Previewer from './src/Previewer'

render(
  <Previewer
    source='https://video.com/url.mp4'
    style={{
      maxWidth: 250,
      maxHeight: 250
    }}
    onChange={imageInBase64 => {
      // Here you get the latest selected preview in base64
    }}>
  </Previewer>, document.querySelector('#root'))
```