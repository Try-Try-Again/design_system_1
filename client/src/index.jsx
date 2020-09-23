import React from 'react';
import ReactDOM from 'react-dom';
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from './components/Buttons';
import { GlobalStyle } from './utils';

const App = () => (
  <div>
    <PrimaryButton modifiers={['small', 'warning']}> Hey Boys! </PrimaryButton>
    <SecondaryButton modifiers={['large', 'secondaryButtonWarning']}> Hey, Girls! </SecondaryButton>
    <TertiaryButton> Superstar DJ! </TertiaryButton>
    <PrimaryButton disabled> Hey Boys! </PrimaryButton>
    <SecondaryButton disabled> Hey, Girls! </SecondaryButton>
    <TertiaryButton disabled> Superstar DJ! </TertiaryButton>
    <GlobalStyle />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
