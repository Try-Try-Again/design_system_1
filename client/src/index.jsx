import React from 'react';
import ReactDOM from 'react-dom';
import {
  MasterGridContainer,
  PanelContainer,
} from './styleguide/Containers';
import { MonochromeSwatches, AccentSwatches } from './styleguide/ColorSwatchDisplay';
import { GlobalStyle } from './utils';

// import PrimaryButton, {
//  SecondaryButton,
//  TertiaryButton,
// } from './components/Buttons';
// const App = () => (
//   <div>
//     <PrimaryButton modifiers={['small', 'warning']}> Hey Boys! </PrimaryButton>
//     <SecondaryButton modifiers={['large', 'secondaryButtonWarning']}>
//       Hey, Girls!
//     </SecondaryButton>
//     <TertiaryButton> Superstar DJ! </TertiaryButton>
//     <PrimaryButton disabled> Hey Boys! </PrimaryButton>
//     <SecondaryButton disabled> Hey, Girls! </SecondaryButton>
//     <TertiaryButton disabled> Superstar DJ! </TertiaryButton>
//     <GlobalStyle />
//   </div>
// );
//
// we might be able to eliminae the 'panel-contatiner'
// if it looks bad, we'll bring it back

const App = () => (
  <div>
    <MasterGridContainer>
      <h1> Design System 1</h1>
      <PanelContainer>
        <div> Monotones </div>
        <MonochromeSwatches />
        <div> Accents </div>
        <AccentSwatches />
      </PanelContainer>
    </MasterGridContainer>
    <GlobalStyle />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
