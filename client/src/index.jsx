import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import {
  MasterGridContainer,
  PanelContainer,
} from './styleguide/Containers';
import { MonochromeSwatches, AccentSwatches } from './styleguide/ColorSwatchDisplay';
import { GlobalStyle, darkTheme, lightTheme } from './utils';
import { PrimaryButton } from './components/Buttons';

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

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
      <PrimaryButton
        onClick={() => setUseDarkTheme(!useDarkTheme)}
      >
        { useDarkTheme ? 'Light Theme' : 'Dark Theme' }
      </PrimaryButton>
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
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
