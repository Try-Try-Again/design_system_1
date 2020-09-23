import React from 'react';
import ReactDOM from 'react-dom';
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from './components/Buttons';

const App = () => (
  <div>
    <PrimaryButton> Hey Boys! </PrimaryButton>
    <SecondaryButton> Hey, Girls! </SecondaryButton>
    <TertiaryButton> Superstar DJ! </TertiaryButton>
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));