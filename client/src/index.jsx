import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import {
  MasterGridContainer,
  PanelContainer,
  TitleBox,
  NavBar,
} from './styleguide/Containers';
import { Typography } from './styleguide/Typography';
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
      <NavBar>
        <PrimaryButton
          style={{ justifySelf: 'flex-end' }}
          onClick={() => setUseDarkTheme(!useDarkTheme)}
        >
          { useDarkTheme ? 'Light Theme' : 'Dark Theme' }
        </PrimaryButton>
      </NavBar>
      <MasterGridContainer>
        <TitleBox>
          <h1> Design System 1</h1>
        </TitleBox>
        <PanelContainer>
          <h5> Monotones </h5>
          <MonochromeSwatches />
          <h5> Accents </h5>
          <AccentSwatches />
          <h5> Typeography </h5>
          <Typography />
        </PanelContainer>
      </MasterGridContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
