import React from 'react'

import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { storiesOf } from '@storybook/react'

// import { Button, Welcome } from '@storybook/react/demo'

import Home from '../pages/home'

// storiesOf('Welcome', module).add('to Storybook', () => (
//   <Welcome showApp={linkTo('Button')} />
// ))

storiesOf('Button', module)
  // .add('with text', () => (
  //   <Button onClick={action('clicked')}>Hello Button</Button>
  // ))
  .add('hello', () => <Home name="mad" />)
// .add('with some emoji', () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// ))
