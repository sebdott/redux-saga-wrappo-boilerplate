import React from 'react';
import { JssProvider, ThemeProvider } from 'react-jss';
import { Button, Welcome } from '@storybook/react/demo';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Header from '../components/Header/';
import { theme, jss } from '../themes/';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="emoji">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Header', module).add('to Storybook', () => (
  <ThemeProvider theme={theme}>
    <JssProvider jss={jss}>
      <Header />
    </JssProvider>
  </ThemeProvider>
));
